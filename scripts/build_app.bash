#!/bin/bash 

npm run lint-modules
bash ./scripts/build_modules.bash --all 

echo ""
echo "Building of app... 💚"

cd ./app/yamu-react-app
npm run build

echo "The application is ready for deployment ✅ 🌿 "
exit 0