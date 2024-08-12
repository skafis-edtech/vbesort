#!/bin/bash

# Check if the correct number of arguments are provided
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <string_to_prepend>"
  exit 1
fi

# Assign command-line argument to variable
PREFIX="$1"

# Use the current working directory
DIR="$(pwd)"

# Iterate over each file in the directory
for FILE in "$DIR"/*; do
  # Check if it's a regular file
  if [ -f "$FILE" ]; then
    # Get the base name of the file (without the directory path)
    BASENAME=$(basename "$FILE")
    
    # Construct the new file name by prepending the prefix
    NEWNAME="$PREFIX$BASENAME"
    
    # Rename the file
    mv "$FILE" "$DIR/$NEWNAME"
  fi
done

echo "Files have been renamed successfully."
