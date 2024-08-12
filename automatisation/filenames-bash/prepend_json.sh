#!/bin/bash

# Check if the correct number of arguments are provided
if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <json_file> <string_to_prepend>"
  exit 1
fi

# Assign command-line arguments to variables
JSON_FILE="$1"
PREFIX="$2"

# Check if the JSON file exists
if [ ! -f "$JSON_FILE" ]; then
  echo "File $JSON_FILE does not exist."
  exit 1
fi

# Use jq to prepend the string to the filename field and overwrite the original file
jq --arg prefix "$PREFIX" '.[] |= (.filename = $prefix + .filename)' "$JSON_FILE" > temp.json && mv temp.json "$JSON_FILE"

echo "Filenames in the JSON file have been updated successfully."

