param(
  [string]$TaskName = "1MEL Site Daily Update",
  [string]$Time = "09:00"
)

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot
$script = Join-Path $repoRoot "scripts\daily-update.ps1"
$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$script`""
$trigger = New-ScheduledTaskTrigger -Daily -At $Time

Register-ScheduledTask -TaskName $TaskName -Action $action -Trigger $trigger -Description "Atualiza e publica o site do 1-MEL uma vez por dia." -Force
Write-Host "Tarefa diaria criada: $TaskName as $Time"
