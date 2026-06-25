# ============================================
# Auto Git Push - Kandhasamy Textile
# Watches for file changes and auto commits + pushes to GitHub
# ============================================

$watchPath = "d:\textile\src"
$repoPath  = "d:\textile"
$debounceSeconds = 5  # Wait 5s after last change before pushing

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Auto Git Push - Kandhasamy Textile" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Watching: $watchPath" -ForegroundColor Yellow
Write-Host "  Repo:     $repoPath" -ForegroundColor Yellow
Write-Host "  Debounce: $debounceSeconds seconds" -ForegroundColor Yellow
Write-Host "  Press Ctrl+C to stop" -ForegroundColor Gray
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Setup FileSystemWatcher
$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $watchPath
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true
$watcher.NotifyFilter = [System.IO.NotifyFilters]::LastWrite -bor
                        [System.IO.NotifyFilters]::FileName -bor
                        [System.IO.NotifyFilters]::DirectoryName

# Shared timer variable
$global:lastChangeTime = $null
$global:pendingPush = $false

$action = {
    $path = $Event.SourceEventArgs.FullPath
    $changeType = $Event.SourceEventArgs.ChangeType

    # Ignore node_modules, .git, dist folders
    if ($path -match '\\node_modules\\' -or $path -match '\\.git\\' -or $path -match '\\dist\\') {
        return
    }

    $global:lastChangeTime = Get-Date
    $global:pendingPush = $true
    Write-Host "  [~] Change detected: $changeType -> $($path.Replace('d:\textile\src\', ''))" -ForegroundColor DarkYellow
}

# Register events
Register-ObjectEvent $watcher "Changed" -Action $action | Out-Null
Register-ObjectEvent $watcher "Created" -Action $action | Out-Null
Register-ObjectEvent $watcher "Deleted" -Action $action | Out-Null
Register-ObjectEvent $watcher "Renamed" -Action $action | Out-Null

Write-Host "  [OK] Watcher active. Make changes to trigger auto-push..." -ForegroundColor Green
Write-Host ""

# Main loop
try {
    while ($true) {
        Start-Sleep -Milliseconds 500

        if ($global:pendingPush -and $global:lastChangeTime) {
            $elapsed = (Get-Date) - $global:lastChangeTime

            if ($elapsed.TotalSeconds -ge $debounceSeconds) {
                $global:pendingPush = $false
                $global:lastChangeTime = $null

                Write-Host ""
                Write-Host "  [>>] Pushing changes to GitHub..." -ForegroundColor Cyan

                Set-Location $repoPath

                # Stage all changes
                git add .

                # Create commit message with timestamp
                $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
                $status = git status --short
                $commitMsg = "Auto-push: $timestamp`n`nChanged files:`n$status"

                # Commit
                $commitOutput = git commit -m $commitMsg 2>&1
                if ($LASTEXITCODE -eq 0) {
                    Write-Host "  [+] Committed: $timestamp" -ForegroundColor Green

                    # Push
                    $pushOutput = git push origin main 2>&1
                    if ($LASTEXITCODE -eq 0) {
                        Write-Host "  [OK] Pushed to GitHub successfully!" -ForegroundColor Green
                    } else {
                        Write-Host "  [!] Push failed: $pushOutput" -ForegroundColor Red
                    }
                } else {
                    # Nothing new to commit
                    if ($commitOutput -match "nothing to commit") {
                        Write-Host "  [=] No changes to commit." -ForegroundColor Gray
                    } else {
                        Write-Host "  [!] Commit failed: $commitOutput" -ForegroundColor Red
                    }
                }

                Write-Host ""
                Write-Host "  [OK] Watching for next change..." -ForegroundColor DarkGray
            }
        }
    }
} finally {
    # Cleanup on exit
    Get-EventSubscriber | Unregister-Event
    $watcher.Dispose()
    Write-Host ""
    Write-Host "  [STOPPED] Auto-push watcher stopped." -ForegroundColor Red
}
