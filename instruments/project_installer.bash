{
  rm -rf .husky
  npm install husky --save-dev
  npx husky install
  npm install
  npx husky add .husky/pre-commit "npm run lint-modules"
  echo ""
  echo "Husky has been successfully installed ✅ 🌿"
} || {
  echo "Error #1 ❌"
}

{
  cd ./app/yamu-react-app 
  npm install 
  echo ""
  echo "Application dependencies successfully installed ✅ 🌿"
} || {
  echo "Error #2 ❌"
}

{
  cd ../../ && cd ./modules/mock-up-html-renderer
  npm install
  echo ""
  echo "@mock-up-html-renderer dependencies successfully installed ✅ 🌿"
} || {
  echo "Error #3 ❌"
}

{
  cd ../../ && cd ./modules/mock-up-generator
  npm install
  echo ""
  echo "@mock-up-generator dependencies successfully installed ✅ 🌿"
} || {
  echo "Error #4 ❌"
}

{
  cd ../../
  npm install
  bash ./scripts/build_modules.bash --all
} || {
  echo "Error #5 ❌"
}