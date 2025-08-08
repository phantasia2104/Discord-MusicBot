const path = require('path');
const fs = require('fs');

// FFmpeg path configuration
function getFFmpegPath() {
    // Try ffmpeg-static first (bundled with npm package)
    const ffmpegStaticPath = path.join(__dirname, 'node_modules', 'ffmpeg-static', 'ffmpeg.exe');
    if (fs.existsSync(ffmpegStaticPath)) {
        console.log('✅ Using FFmpeg from ffmpeg-static package');
        return ffmpegStaticPath;
    }
    
    // Try system PATH
    try {
        require('child_process').execSync('ffmpeg -version', { stdio: 'ignore' });
        console.log('✅ Using FFmpeg from system PATH');
        return 'ffmpeg';
    } catch (error) {
        console.log('❌ FFmpeg not found in system PATH');
    }
    
    // Fallback
    console.log('⚠️ FFmpeg not found, using default path');
    return 'ffmpeg';
}

// Set FFmpeg path for prism-media
const ffmpegPath = getFFmpegPath();
process.env.FFMPEG_PATH = ffmpegPath;

// Export for use in other modules
module.exports = {
    ffmpegPath,
    setFFmpegPath: (customPath) => {
        process.env.FFMPEG_PATH = customPath;
    }
};

console.log(`🎵 FFmpeg configured at: ${ffmpegPath}`);
