$files = Get-ChildItem "C:\Users\Naglis\Desktop\GITHUBO_REPOS\vbe-sort\public\2021" -Filter *.png
$json = $files | ForEach-Object { 
   [ordered]@{ 
        filename = $_.Name
        topic = "misc"
    } 
} | ConvertTo-Json
$json | Out-File "filenames.json"
