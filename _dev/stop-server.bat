@echo off
chcp 65001 >nul
echo ============================================
echo   ローカルサーバーを停止します
echo ============================================
echo.

:: ポート8000を使用しているプロセスを探して停止
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":8000 " ^| findstr "LISTENING"') do (
    echo PID %%a のプロセスを停止します...
    taskkill /PID %%a /F >nul 2>&1
    if %ERRORLEVEL%==0 (
        echo 停止しました。
    ) else (
        echo 停止に失敗しました（既に停止済みの可能性があります）。
    )
)

:: 見つからなかった場合
netstat -aon | findstr ":8000 " | findstr "LISTENING" >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ポート8000で動作中のサーバーはありません。
)

echo.
pause
