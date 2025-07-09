#!/bin/bash

echo "Optimizing images for web use..."

# Function to optimize images in a directory
optimize_directory() {
    local dir="$1"
    local max_width="$2"
    local quality="$3"
    
    echo "Processing directory: $dir"
    
    # Find all jpg/jpeg/png files and optimize them
    find "$dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
        echo "Optimizing: $file"
        
        # Get original file size
        original_size=$(stat -f%z "$file")
        
        # Optimize image
        sips -Z "$max_width" -s format jpeg -s formatOptions "$quality" "$file" --out "$file.tmp"
        
        if [ $? -eq 0 ]; then
            mv "$file.tmp" "$file"
            new_size=$(stat -f%z "$file")
            savings=$((original_size - new_size))
            savings_mb=$((savings / 1024 / 1024))
            echo "  ✓ Optimized: ${original_size} -> ${new_size} bytes (saved ~${savings_mb}MB)"
        else
            echo "  ✗ Failed to optimize: $file"
            rm -f "$file.tmp"
        fi
    done
}

# Optimize different directories with appropriate settings
optimize_directory "public/images/breakfast" 1200 80
optimize_directory "public/images/cafe" 1200 80
optimize_directory "public/images/coffee_more" 1200 80
optimize_directory "public/images/rooms" 1200 80
optimize_directory "public/images/hero" 1920 85
optimize_directory "public/images/about" 1200 80

echo "Image optimization complete!" 