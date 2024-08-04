#!/bin/bash

# Create a temporary file to hold the JSON objects
temp_file=$(mktemp)

# Find all .png files recursively and process each one
find . -type f -name '*.png' -print0 | xargs -0 -I {} bash -c '
  file="$1"
  filename=$(basename "$file")

  # Check if the 7th character is "r"
  if [ ${#filename} -ge 7 ] && [ "${filename:6:1}" = "r" ]; then
    json_obj=$(printf "{\"filename\": \"%s\", \"topic\": \"root\"}" "$filename")
  else
    json_obj=$(printf "{\"filename\": \"%s\", \"topic\": \"misc\", \"answer\": \"Z\"}" "$filename" )
  fi

  # Print the JSON object
  echo "$json_obj,"
' _ {} >> "$temp_file"

# Combine all JSON objects into a single JSON array
json_array=$(cat "$temp_file" | sed '$ s/,$//')  # Remove the trailing comma from the last line
json_array="[$json_array]"

# Save the JSON array to a file
echo "$json_array" | jq '.' > filenames.json

# Clean up the temporary file
rm "$temp_file"
