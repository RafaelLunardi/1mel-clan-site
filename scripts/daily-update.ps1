param(
  [string]$Message = "daily site update"
)

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

$dataPath = Join-Path $repoRoot "data/site-data.json"
$data = Get-Content -Raw $dataPath | ConvertFrom-Json
$data.lastUpdated = (Get-Date).ToString("yyyy-MM-dd")
$data | ConvertTo-Json -Depth 8 | Set-Content -Encoding UTF8 $dataPath

git add data/site-data.json
git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
  Write-Host "Nenhuma alteracao para publicar."
  exit 0
}

git commit -m $Message
git push
