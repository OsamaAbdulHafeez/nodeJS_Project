@echo off
echo "🚀 Vercel.sh script started!"

# Remove package.json
if [ -d "node_modules" ]; then
    rm -rf node_modules
    echo "✅ node_modules folder removed."
else
    echo "⚠️ node_modules folder not found."
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo "✅ Dependencies installed successfully!"

echo "🎯 Vercel.sh script completed!"