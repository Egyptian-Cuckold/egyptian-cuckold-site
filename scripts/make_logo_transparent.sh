#!/bin/bash

# Script to make logo background transparent using ImageMagick
# Usage: ./make_logo_transparent.sh input_image output_image

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 input_image output_image"
    echo "Example: $0 logo.png logo_transparent.png"
    exit 1
fi

INPUT=$1
OUTPUT=$2

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "Error: ImageMagick is not installed. Please install it first."
    echo "On Ubuntu/Debian: sudo apt-get install imagemagick"
    echo "On macOS: brew install imagemagick"
    exit 1
fi

# Check if input file exists
if [ ! -f "$INPUT" ]; then
    echo "Error: Input file '$INPUT' not found."
    exit 1
fi

echo "Processing $INPUT..."

# Make white background transparent
convert "$INPUT" -fuzz 10% -transparent white "$OUTPUT"

echo "Done! Transparent logo saved as $OUTPUT"
