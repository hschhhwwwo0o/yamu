#!/bin/bash 

{
  echo ""
  echo "⚡️ Linting..."
}

# Lint modules
{
  cd ./modules/mock-up-generator && npm run lint
  cd ../../

  cd ./modules/mock-up-canvas-image-generator && npm run lint
  cd ../../

  cd ./modules/feedback-creator && npm run lint
  cd ../../

  cd ./modules/html-image-downloader && npm run lint
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
  echo "✅ Successfully linted."
}

exit 0