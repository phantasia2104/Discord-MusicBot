@echo off
echo.
echo ========================================
echo    Mayuri-MusicBot - Installation
echo ========================================
echo.

echo [1/4] Installing Node.js dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies!
    pause
    exit /b 1
)

echo.
echo [2/4] Creating data directory...
if not exist "data" mkdir data

echo.
echo [3/4] Checking configuration...
if not exist "config.json" (
    echo WARNING: config.json not found!
    echo Please copy and configure config.json from the template.
    echo.
) else (
    echo Configuration file found!
)

echo.
echo [4/4] Installation complete!
echo.
echo Next steps:
echo 1. Configure your config.json with your Discord bot token
echo 2. Set up Spotify API credentials (optional)
echo 3. Run 'npm start' to start the bot
echo.
echo For detailed setup instructions, see README.md
echo.
pause
