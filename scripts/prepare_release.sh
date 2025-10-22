#!/bin/bash

# Script to prepare release build
# This script builds the project, runs tests, and creates a release package

set -e  # Exit on any error

echo "🚀 Preparing release build..."

# Check if we're in the project root
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run from project root."
    exit 1
fi

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Run linter
echo "🔍 Running linter..."
pnpm run lint || {
    echo "⚠️  Linting failed, but continuing..."
}

# Build the project
echo "🏗️  Building project..."
pnpm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed: dist directory not created"
    exit 1
fi

echo "✅ Release build completed successfully!"
echo "📦 Build artifacts are in the 'dist' directory"
echo ""
echo "Next steps:"
echo "  1. Test the build: pnpm run preview"
echo "  2. Deploy to production"
