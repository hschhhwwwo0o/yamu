#!/bin/bash 

{
  echo ""
  echo "Linting... 💚"
}

# Lint modules
{
  cd ./modules/mock-up-generator && npm run lint
  cd ../../

  cd ./modules/mock-up-html-renderer && npm run lint
  cd ../../
}

# Lint app
{
  cd ./app/yamu-react-app && npm run lint
  cd ../../
} || {
  exit 1
}

{
  echo ""
  echo "Successfully linted ✅ 🌿 "
}

exit 0