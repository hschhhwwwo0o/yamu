#!/bin/bash 

# The script compiles modules.

# Handling the --all parameter
{
  case $1 in
    "--all") 
      echo ""
      echo "Compiling of modules... 💚"

      cd ./modules/mock-up-state-generator && npm run compile
      cd ../../

      cd ./modules/mock-up-canvas-image-generator && npm run compile
      cd ../../

      cd ./modules/feedback-creator && npm run compile
      cd ../../

      cd ./modules/html-image-downloader && npm run compile
      cd ../../

      echo "All modules have been successfully compiled ✅ 🌿 "
      exit 0
    ;;
  esac
}

# Handling a script called without parameters
{
  echo ""
  echo "Select the module to compile: "
  echo "  1) All"
  echo "  2) @mock-up-state-generator"
  echo "  3) @mock-up-canvas-image-generator"
  echo "  4) @feedback-creator"
  echo "  5) @html-image-downloader"
  echo "  6) Quit"

  read n
  case $n in
    1) 
      cd ./modules/mock-up-state-generator && npm run compile
      cd ../../

      cd ./modules/mock-up-canvas-image-generator && npm run compile
      cd ../../

      cd ./modules/feedback-creator && npm run compile
      cd ../../

      cd ./modules/html-image-downloader && npm run compile
      cd ../../

      echo "✅ All modules have been successfully compiled"
    ;;
    2) 
      cd ./modules/mock-up-state-generator && npm run compile
      cd ../../

      echo "✅ @mock-up-state-generator module successfully compiled."
    ;;
    3) 
      cd ./modules/mock-up-canvas-image-generator && npm run compile
      cd ../../
      
      echo "✅ @mock-up-canvas-image-generator module successfully compiled."
    ;;
    4) 
      cd ./modules/feedback-creator && npm run compile
      cd ../../
      
      echo "✅ @feedback-creator module successfully compiled."
    ;;
    5) 
      cd ./modules/html-image-downloader && npm run compile
      cd ../../
      
      echo "✅ @html-image-downloader module successfully compiled."
    ;;
    6) 
      exit 0
    ;;
    *) echo "Invalid option.";;
  esac
}