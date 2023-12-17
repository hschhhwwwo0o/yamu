#!/bin/bash 

# A script designed for building an application for the subsequent launch of a deployment. 
# The script starts linking, builds modules, builds the application.

# Linting
{
  npm run lint
}

# Building modules
{
  echo ""
  echo "⚡️ Building of app..."
  bash ./cli/scripts/build_modules.bash --all 
}

# Next.js application build
{
  cd ./app/yamu-react-app
  npm run build
}

{
  echo ""
  echo "✅ The application is ready for deployment."
}

exit 0