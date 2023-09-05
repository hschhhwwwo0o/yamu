#!/bin/bash 

# Linting
{
  npm run lint
}

# Building modules
{
  echo ""
  echo "Building of app... 💚"
  bash ./scripts/build_modules.bash --all 
}

# Next.js application build
{
  cd ./app/yamu-react-app
  npm run build
}

{
  echo ""
  echo "The application is ready for deployment ✅ 🌿"
}

exit 0