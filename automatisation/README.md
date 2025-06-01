# Scripts for vbesort

> More like archive here, no order

## List of automatisations

### Create nr-topic-lut.json initial

When you have screenshots in folders in `public/` dir, navigate to the dir with folders that have screenshots (e.g. `math-problems/`) and run this bash script:

```bash
sh ./filenames-bash/gen-filename-json-recursive.sh
```

Use generated content for the meta data JSONs.

### Rename files in folder as 1.ext, 2.ext, 3.ext ...

Go to folder with files, open terminal there and paste content of `rename_123.sh` optionaly renaming initial counter value. It renames everything in alphabetical order.
