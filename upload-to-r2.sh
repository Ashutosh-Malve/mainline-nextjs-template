#!/bin/bash
cd out
find . -type f | while read file; do
  key="${file#./}"
  echo "Uploading: $key"
  npx wrangler r2 object put "edgebase-assets/$key" --file="$file"
done
