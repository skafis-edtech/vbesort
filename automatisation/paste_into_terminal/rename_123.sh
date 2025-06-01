#!/bin/bash

# This script renames all the files in curr dir to 1, 2, 3 and so on as they are now in alphabetical order
# Useful when taking screenshots and saving them automatically in a folder. Then it can be uploaded to bankas.skafis.lt automatization part

counter=1

for file in *.png *.jpg *.jpeg; do
  if [ -e "$file" ]; then
    ext="${file##*.}"
    mv "$file" "$counter.$ext"
    ((counter++))
  fi
done
