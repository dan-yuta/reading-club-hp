@echo off
chcp 65001 >nul
title Reading Club LP - Local Server

echo ============================================
echo   ローカルサーバーを起動します
echo   ブラウザで http://localhost:3000 を開きます
echo   終了するにはこのウィンドウを閉じてください
echo ============================================
echo.

:: Node.js (npx serve) で起動
where node >nul 2>&1
if %ERRORLEVEL%==0 (
    echo [Node.js で起動]
    start http://localhost:3000
    npx serve "%~dp0.." -l 3000
    goto :eof
)

echo [エラー] Node.js が見つかりません。
echo https://nodejs.org/ からインストールしてください。
pause
