#!/bin/bash

# Set the postfix
POST_FIX="_postfix"

# Loop through all files in the current directory
for file in *.*; do
    # Get the file name without the extension
    base_name="${file%.*}"
    
    # Get the file extension
    extension="${file##*.}"
    
    # Create the new file name with postfix
    new_file="${base_name}${POST_FIX}.${extension}"
    
    # Rename the file
    mv "$file" "$new_file"
    
    echo "Renamed: $file -> $new_file"
done
