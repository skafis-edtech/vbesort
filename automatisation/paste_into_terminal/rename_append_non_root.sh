#!/bin/bash

# Set the postfix
POST_FIX="B"

# Loop through all files in the current directory
for file in *.*; do
    # Get the file name without the extension
    base_name="${file%.*}"
    
    # Get the file extension
    extension="${file##*.}"
    
    # Check if the base_name does not contain the letter "r"
    if [[ "$base_name" != *r* ]]; then
        # Create the new file name with postfix
        new_file="${base_name}${POST_FIX}.${extension}"
        
        # Rename the file
        mv "$file" "$new_file"
        
        echo "Renamed: $file -> $new_file"
    else
        echo "Skipped: $file (contains 'r')"
    fi
done
