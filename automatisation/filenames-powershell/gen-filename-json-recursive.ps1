$files = Get-ChildItem -Path ".\" -Filter *.png -Recurse
$json = $files | ForEach-Object {
    if ($_.Name.Length -ge 7 -and $_.Name[6] -eq 'r') {
        [ordered]@{
            filename = $_.Name
            topic = "root"
        }
    } else {
        [ordered]@{
            filename = $_.Name
            topic = "misc"
            answer = $_.Name
        }
    }
} | ConvertTo-Json -Depth 10
$json | Out-File "filenames.json"
