#!/bin/bash 

cd ./modules/mock-up-generator && npm run compile
cd ../../
cd ./modules/mock-up-html-renderer && npm run compile