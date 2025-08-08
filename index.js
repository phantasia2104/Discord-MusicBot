const { Client, GatewayIntentBits, Collection, REST, Routes, EmbedBuilder } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, StreamType, AudioPlayerStatus, VoiceConnectionStatus, getVoiceConnection } = require('@discordjs/voice');
const fs = require('fs');
const path = require('path');
const config = require('./config.json');
const MusicManager = require('./src/managers/MusicManager');
const DatabaseManager = require('./src/managers/DatabaseManager');

// Set FFmpeg path
try {
    const ffmpegPath = require('ffmpeg-static');
    process.env.FFMPEG_PATH = ffmpegPath;
    console.log('✅ FFmpeg configured successfully');
} catch (error) {
    console.log('⚠️ FFmpeg not found, install FFmpeg for audio playback');
}

class MayuriMusicBot {
    constructor() {
        this.client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildVoiceStates,
                GatewayIntentBits.GuildMembers
            ]
        });

        this.commands = new Collection();
        this.musicManager = new MusicManager();
        this.dbManager = new DatabaseManager();
        this.cooldowns = new Collection();
        
        this.loadCommands();
        this.loadEvents();
        this.setupErrorHandling();
    }

    loadCommands() {
        const commandsPath = path.join(__dirname, 'src', 'commands');
        const commandFolders = fs.readdirSync(commandsPath);

        for (const folder of commandFolders) {
            const commandFiles = fs.readdirSync(path.join(commandsPath, folder)).filter(file => file.endsWith('.js'));
            
            for (const file of commandFiles) {
                const filePath = path.join(commandsPath, folder, file);
                const command = require(filePath);
                
                if ('data' in command && 'execute' in command) {
                    this.commands.set(command.data.name, command);
                    console.log(`✅ Loaded command: ${command.data.name}`);
                } else {
                    console.log(`⚠️  Command ${filePath} is missing required "data" or "execute" property`);
                }
            }
        }
    }

    loadEvents() {
        const eventsPath = path.join(__dirname, 'src', 'events');
        const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

        for (const file of eventFiles) {
            const filePath = path.join(eventsPath, file);
            const event = require(filePath);
            
            if (event.once) {
                this.client.once(event.name, (...args) => event.execute(...args, this));
            } else {
                this.client.on(event.name, (...args) => event.execute(...args, this));
            }
            console.log(`✅ Loaded event: ${event.name}`);
        }
    }

    setupErrorHandling() {
        process.on('unhandledRejection', error => {
            console.error('Unhandled promise rejection:', error);
        });

        process.on('uncaughtException', error => {
            console.error('Uncaught exception:', error);
            process.exit(1);
        });

        this.client.on('error', error => {
            console.error('Discord client error:', error);
        });
    }

    async registerSlashCommands() {
        const commands = [];
        
        for (const [name, command] of this.commands) {
            commands.push(command.data.toJSON());
        }

        const rest = new REST({ version: '10' }).setToken(config.token);

        try {
            console.log(`🔄 Started refreshing ${commands.length} application (/) commands.`);

            const data = await rest.put(
                Routes.applicationCommands(config.clientId),
                { body: commands },
            );

            console.log(`✅ Successfully reloaded ${data.length} application (/) commands.`);
        } catch (error) {
            console.error('Error registering slash commands:', error);
        }
    }

    async start() {
        try {
            await this.client.login(config.token);
            await this.registerSlashCommands();
            console.log(`🎵 ${this.client.user.tag} is now online and ready to rock!`);
        } catch (error) {
            console.error('Failed to start bot:', error);
            process.exit(1);
        }
    }
}

// Initialize and start the bot
const bot = new MayuriMusicBot();
bot.start();
