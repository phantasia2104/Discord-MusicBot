@echo off
echo Setting up FFmpeg for Discord Music Bot...

REM Get the current directory
set CURRENT_DIR=%cd%

REM Set the FFmpeg path to the bundled ffmpeg-static
set FFMPEG_PATH=%CURRENT_DIR%\node_modules\ffmpeg-static\ffmpeg.exe

echo FFmpeg path set to: %FFMPEG_PATH%

REM Add to current session
set PATH=%PATH%;%CURRENT_DIR%\node_modules\ffmpeg-static

echo Testing FFmpeg...
if exist "%FFMPEG_PATH%" (
    echo ✅ FFmpeg found at the specified path
    "%FFMPEG_PATH%" -version
) else (
    echo ❌ FFmpeg not found at the specified path
    echo Make sure you have run 'npm install' first
)

echo.
echo You can now start your bot with: npm start
echo or: node index.js
pause
