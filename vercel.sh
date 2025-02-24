echo "🚀 Vercel.sh script started!"

# Remove package.json
if [ -f "package.json" ]; then
    rm package.json
    echo "✅ package.json file removed."
else
    echo "⚠️ package.json file not found."
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo "✅ Dependencies installed successfully!"

echo "🎯 Vercel.sh script completed!"