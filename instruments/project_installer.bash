#!/bin/bash 

# Husky install
{
  rm -rf .husky
  npm install husky --save-dev
  npx husky install
  npm install
  npx husky add .husky/pre-commit "npm run lint-modules"

  echo ""
  echo "Husky has been successfully installed ✅ 🌿"
} || {
  echo "Error installing husky ❌"
}

# Application dependencies install
{
  cd ./app/yamu-react-app 
  npm install 

  echo ""
  echo "Application dependencies successfully installed ✅ 🌿"
} || {
  echo "Error installing application dependencies ❌"
}

# @mock-up-html-renderer dependencies install
{
  cd ../../ && cd ./modules/mock-up-html-renderer
  npm install

  echo ""
  echo "@mock-up-html-renderer dependencies successfully installed ✅ 🌿"
} || {
  echo "Dependency installation error @mock-up-html-renderer ❌"
}

# @mock-up-generator dependencies install
{
  cd ../../ && cd ./modules/mock-up-generator
  npm install
  
  echo ""
  echo "@mock-up-generator dependencies successfully installed ✅ 🌿"
} || {
  echo "Dependency installation error @mock-up-generator ❌"
}

# Compile all modules
{
  cd ../../
  npm install
  bash ./scripts/build_modules.bash --all
} || {
  echo "Error compiling modules ❌"
}

exit 0