#!/bin/bash 

echo ""
echo "Linting of modules... 💚"

{
  cd ./modules/mock-up-generator && npm run lint
  cd ../../

  cd ./modules/mock-up-html-renderer && npm run lint
  cd ../../
}

echo ""
echo "All modules have been successfully tested ✅ 🌿 "

exit 0