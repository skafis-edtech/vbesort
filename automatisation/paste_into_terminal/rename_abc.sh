#!/bin/bash

# Set the folder containing the images
INPUT_DIR="./"

# Counter for renaming
counter=601

# Loop through all PNG files in alphabetical order
for file in "$INPUT_DIR"/*.png; do
    # Generate new filename
    new_name=$(printf "mat11-%d.png" "$counter")

    # Rename the file
    mv "$file" "$INPUT_DIR/$new_name"

    # Print output
    echo "Renamed: $file → $new_name"

    # Increment counter
    ((counter++))
done

echo "Renaming complete!"
