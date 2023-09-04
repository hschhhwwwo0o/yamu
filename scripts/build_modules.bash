#!/bin/bash 

{
  case $1 in
    "--all") 
      echo ""
      echo "Compiling of modules... 💚"

      cd ./modules/mock-up-generator && npm run compile
      cd ../../
      cd ./modules/mock-up-html-renderer && npm run compile
      cd ../../

      echo "All modules have been successfully compiled ✅ 🌿 "
      exit 0
    ;;
  esac
}

{
  echo ""
  echo "Select the module to compile: "
  echo "  1) All"
  echo "  2) @mock-up-generator"
  echo "  3) @mock-up-html-renderer"
  echo "  4) Quit"

  read n
  case $n in
    1) 
      cd ./modules/mock-up-generator && npm run compile
      cd ../../
      cd ./modules/mock-up-html-renderer && npm run compile
      cd ../../

      echo "All modules have been successfully compiled ✅ 🌿"
    ;;
    2) 
      cd ./modules/mock-up-generator && npm run compile
      cd ../../

      echo "@mock-up-generator module successfully compiled ✅ 🌿"
    ;;
    3) 
      cd ./modules/mock-up-html-renderer && npm run compile
      cd ../../
      
      echo "@mock-up-html-renderer module successfully compiled ✅ 🌿"
    ;;
    4) 
      exit 0
    ;;
    *) echo "Invalid option";;
  esac
}