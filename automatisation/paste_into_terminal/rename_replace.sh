#!/bin/bash

# Set constants
REPLACE_WHAT="old_text"
REPLACE_WITH="new_text"

# Loop through all files in the current directory
for file in *; do
    # Check if the file name contains the text to be replaced
    if [[ "$file" == *"$REPLACE_WHAT"* ]]; then
        # Create the new file name
        new_file="${file//$REPLACE_WHAT/$REPLACE_WITH}"
        
        # Rename the file
        mv "$file" "$new_file"
        
        echo "Renamed: $file -> $new_file"
    fi
done
