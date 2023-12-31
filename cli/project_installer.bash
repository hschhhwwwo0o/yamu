#!/bin/bash 

# A script for installing the project. 
# The script installs husky and dependencies required for modules.

# Husky install
{
  rm -rf .husky
  npm install husky --save-dev
  npx husky install
  npm install
  npx husky add .husky/pre-commit "npm run lint"

  echo ""
  echo "✅ Husky has been successfully installed"
} || {
  echo "Error installing husky ❌"
}

# Application dependencies install
{
  cd ./app/yamu-react-app 
  npm install 

  echo ""
  echo "✅ Application dependencies successfully installed"
} || {
  echo "Error installing application dependencies ❌"
}

# @mock-up-canvas-image-generator dependencies install
{
  cd ../../ && cd ./modules/mock-up-canvas-image-generator
  npm install

  echo ""
  echo "✅ @mock-up-canvas-image-generator dependencies successfully installed"
} || {
  echo "Dependency installation error @mock-up-canvas-image-generator ❌"
}

# @mock-up-state-generator dependencies install
{
  cd ../../ && cd ./modules/mock-up-state-generator
  npm install
  
  echo ""
  echo "✅ @mock-up-state-generator dependencies successfully installed"
} || {
  echo "Dependency installation error @mock-up-state-generator ❌"
}

# @feedback-creator dependencies install
{
  cd ../../ && cd ./modules/feedback-creator
  npm install
  
  echo ""
  echo "✅ @feedback-creator dependencies successfully installed"
} || {
  echo "Dependency installation error @feedback-creator ❌"
}

# @html-image-downloader dependencies install
{
  cd ../../ && cd ./modules/html-image-downloader
  npm install
  
  echo ""
  echo "✅ @html-image-downloader dependencies successfully installed"
} || {
  echo "Dependency installation error @html-image-downloader ❌"
}

# Compile all modules
{
  cd ../../
  npm install
  bash ./cli/scripts/build_modules.bash --all
} || {
  echo "Error compiling modules ❌"
}

exit 0