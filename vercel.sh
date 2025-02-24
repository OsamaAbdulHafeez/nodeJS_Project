if [ -f "package.json" ]; then
    rm package.json
    echo "package.json file removed."
else
    echo "package.json file not found."
fi

npm install