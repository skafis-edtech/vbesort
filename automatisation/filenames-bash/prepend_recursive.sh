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

# Iterate over each file in the immediate subdirectories only
find "$DIR" -mindepth 2 -maxdepth 2 -type f | while read -r FILE; do
  # Get the directory name and base name of the file
  DIRNAME=$(dirname "$FILE")
  BASENAME=$(basename "$FILE")
  
  # Construct the new file name by prepending the prefix
  NEWNAME="$DIRNAME/$PREFIX$BASENAME"
  
  # Rename the file
  mv "$FILE" "$NEWNAME"
done

echo "Files in immediate subdirectories have been renamed successfully."
