# 🎵 Mayuri-MusicBot

A comprehensive Discord music bot featuring high-quality audio playback, Spotify integration, personal playlists, audio filters, and much more!

## ✨ Features

### 🎵 Music Playback
- **Multi-Platform Support**: YouTube and Spotify integration
- **High-Quality Audio**: Crystal clear audio streaming
- **Queue Management**: Add, remove, and reorder songs
- **Loop Modes**: Off, Track, or Queue looping
- **Volume Control**: Adjustable volume (0-100%)
- **Auto-Leave**: Automatically leaves when inactive

### 📋 Playlist Management
- **Personal Playlists**: Create and manage your own playlists
- **Playlist Playback**: Play entire playlists with shuffle option
- **Easy Management**: Add/remove songs from playlists
- **Favorites System**: Quick access to your favorite songs

### 🎛️ Audio Filters (10+ Available)
- **8D Audio**: Immersive surround sound effect
- **Bass Boost**: Enhanced bass frequencies
- **Nightcore**: Higher pitch and faster tempo
- **Vaporwave**: Slowed down, nostalgic feel
- **Karaoke**: Vocal reduction for sing-alongs
- **Tremolo**: Volume oscillation effect
- **Vibrato**: Pitch oscillation effect
- **Reverse**: Play audio in reverse
- **Treble**: Enhanced high frequencies
- **Surrounding**: Spatial audio effect

### 🔧 Advanced Features
- **Slash Commands**: Modern Discord slash command support
- **Interactive Buttons**: Control music with clickable buttons
- **Search History**: Remember your recent searches
- **Statistics Tracking**: Detailed bot and usage statistics
- **Error Handling**: Robust error handling and recovery
- **Cooldown System**: Prevent command spam

## 🚀 Setup Instructions

### Prerequisites
- Node.js 16.9.0 or higher
- A Discord application and bot token
- FFmpeg installed on your system

### 1. Clone and Install
```bash
git clone <repository-url>
cd discord-music-bot
npm install
```

### 2. Configure the Bot
1. Rename `config.json.example` to `config.json`
2. Fill in your configuration:

```json
{
  "token": "YOUR_BOT_TOKEN_HERE",
  "clientId": "YOUR_CLIENT_ID_HERE",
  "prefix": "h!",
  "defaultVolume": 50,
  "maxQueueSize": 100,
  "maxPlaylistSize": 50,
  "embedColor": "#00ff00",
  "ownerIds": ["YOUR_DISCORD_ID_HERE"],
  "spotify": {
    "clientId": "YOUR_SPOTIFY_CLIENT_ID",
    "clientSecret": "YOUR_SPOTIFY_CLIENT_SECRET"
  },
  "genius": {
    "apiKey": "YOUR_GENIUS_API_KEY"
  }
}
```

### 3. Discord Developer Portal Setup
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Go to "Bot" section and create a bot
4. Copy the bot token to your config
5. Enable necessary intents:
   - GUILDS
   - GUILD_MESSAGES
   - GUILD_VOICE_STATES
   - MESSAGE_CONTENT

### 4. Spotify Integration (Optional)
1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new app
3. Copy Client ID and Client Secret to config
4. This enables Spotify playlist and track support

### 5. Invite Bot to Server
Use this invite link (replace CLIENT_ID):
```
https://discord.com/api/oauth2/authorize?client_id=CLIENT_ID&permissions=2184260608&scope=bot%20applications.commands
```

Required Permissions:
- View Channels
- Send Messages
- Use Slash Commands
- Connect to Voice
- Speak in Voice
- Use Voice Activity

### 6. Run the Bot
```bash
# Production
npm start

# Development (with auto-restart)
npm run dev
```

## 📋 Commands

### 🎵 Music Commands
| Command | Description | Usage |
|---------|-------------|-------|
| `/play` | Play a song or add to queue | `/play query:song name` |
| `/skip` | Skip current song | `/skip [amount:number]` |
| `/pause` | Pause current song | `/pause` |
| `/resume` | Resume paused song | `/resume` |
| `/stop` | Stop music and clear queue | `/stop` |
| `/queue` | Show current queue | `/queue [page:number]` |
| `/volume` | Set or view volume | `/volume [level:0-100]` |
| `/loop` | Set loop mode | `/loop mode:off/track/queue` |
| `/shuffle` | Shuffle queue | `/shuffle` |
| `/nowplaying` | Show current song info | `/nowplaying [detailed:true/false]` |

### 📋 Playlist Commands
| Command | Description | Usage |
|---------|-------------|-------|
| `/playlist create` | Create new playlist | `/playlist create name:My Playlist` |
| `/playlist list` | Show your playlists | `/playlist list` |
| `/playlist show` | Show playlist contents | `/playlist show name:My Playlist` |
| `/playlist add` | Add current song to playlist | `/playlist add name:My Playlist` |
| `/playlist remove` | Remove song from playlist | `/playlist remove name:My Playlist position:1` |
| `/playlist play` | Play entire playlist | `/playlist play name:My Playlist shuffle:true` |
| `/playlist delete` | Delete playlist | `/playlist delete name:My Playlist` |

### 🎛️ Filter Commands
| Command | Description | Usage |
|---------|-------------|-------|
| `/filter add` | Add audio filter | `/filter add filter:bassboost` |
| `/filter remove` | Remove audio filter | `/filter remove filter:bassboost` |
| `/filter clear` | Clear all filters | `/filter clear` |
| `/filter list` | Show active filters | `/filter list` |

### 🔧 Utility Commands
| Command | Description | Usage |
|---------|-------------|-------|
| `/help` | Show help information | `/help [category:music]` |
| `/stats` | Show bot statistics | `/stats` |
| `/ping` | Check bot latency | `/ping` |

## 🎛️ Available Audio Filters

- **8D Audio**: Creates a surround sound effect
- **Bass Boost**: Enhances low-frequency sounds
- **Nightcore**: Increases pitch and tempo
- **Vaporwave**: Slows down and creates nostalgic feel
- **Karaoke**: Reduces vocal frequencies
- **Tremolo**: Creates volume oscillation
- **Vibrato**: Creates pitch oscillation
- **Reverse**: Plays audio backwards
- **Treble**: Enhances high frequencies
- **Surrounding**: Creates spatial audio effect

## 📁 Project Structure

```
discord-music-bot/
├── src/
│   ├── commands/
│   │   ├── music/        # Music playback commands
│   │   ├── playlist/     # Playlist management
│   │   ├── filters/      # Audio filter commands
│   │   └── utility/      # Utility commands
│   ├── events/           # Discord.js event handlers
│   ├── managers/         # Core functionality managers
│   └── utils/            # Utility functions
├── data/                 # Database and user data
├── config.json          # Bot configuration
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🛠️ Development

### Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Adding New Commands
1. Create command file in appropriate folder
2. Follow existing command structure
3. Update help command if needed
4. Test functionality

### Adding New Filters
1. Add filter definition to MusicManager
2. Update filter command choices
3. Test audio output quality

## 📊 Performance

### System Requirements
- **RAM**: Minimum 512MB, Recommended 1GB+
- **CPU**: Any modern processor
- **Storage**: 100MB+ free space
- **Network**: Stable internet connection

### Optimization Features
- Efficient memory usage
- Connection pooling
- Automatic cleanup
- Error recovery
- Rate limiting

## 🔒 Security Features

- Input validation and sanitization
- Rate limiting and cooldowns
- Permission checking
- Error handling
- Secure configuration management

## 🆘 Troubleshooting

### Common Issues

**Bot doesn't respond to commands:**
- Check bot permissions
- Verify token is correct
- Ensure bot is online

**Audio not playing:**
- Check voice channel permissions
- Verify FFmpeg installation
- Check internet connection

**Spotify not working:**
- Verify Spotify API credentials
- Check API quotas
- Ensure valid track URLs

**High memory usage:**
- Restart bot regularly
- Check for memory leaks
- Monitor active connections

### Support
- Check the issues section on GitHub
- Join our support Discord server
- Read the troubleshooting guide

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Discord.js community for excellent documentation
- YouTube and Spotify for their APIs
- FFmpeg for audio processing capabilities
- All contributors and users of this bot

## 🔗 Links

- [Discord.js Documentation](https://discord.js.org/)
- [Discord Developer Portal](https://discord.com/developers/docs/)
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- [FFmpeg](https://ffmpeg.org/)

---

Made with ❤️ by the Discord Music Bot team. Star ⭐ this repo if you found it useful!
