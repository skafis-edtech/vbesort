$files = Get-ChildItem ".\" -Filter *.png
$json = $files | ForEach-Object { 
   [ordered]@{ 
        filename = $_.Name
        topic = "misc"
        answer = ""
    } 
} | ConvertTo-Json
$json | Out-File "filenames.json"
