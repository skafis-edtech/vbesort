# Define the path of the folder
$folderPath = ".\"

# Get all the files in the folder
$files = Get-ChildItem -Path $folderPath -Filter *.png

# Loop through each file
foreach ($file in $files) {
    # Construct the new file name
    $newFileName = "2019g" + $file.Name

    # Rename the file
    Rename-Item -Path $file.FullName -NewName $newFileName
}
