# Specify the path to the JSON file
$jsonFilePath = "old-math-lut.json"

# Read the JSON file and convert it to a PowerShell object
$jsonContent = Get-Content -Path $jsonFilePath | ConvertFrom-Json

# Iterate through each object in the array and modify the "answer" field
foreach ($obj in $jsonContent) {
    if ($obj.answer -ne $null) {
        # Explicitly replace capital 'N' with nothing, ensuring no impact on lowercase 'n'
        $obj.answer = $obj.answer -creplace '[N]', ''
    }
}

# Convert the modified object back to JSON
# Using -Depth parameter to ensure complex objects are converted properly
$modifiedJson = $jsonContent | ConvertTo-Json -Depth 10

# Write the modified JSON back to the file
$modifiedJson | Set-Content -Path $jsonFilePath
