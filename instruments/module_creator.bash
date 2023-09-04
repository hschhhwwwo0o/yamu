#!/bin/bash 

echo ""
echo "Enter the name of the new module: "

read modulename

cd ./modules 

mkdir $modulename

cd ./$modulename

mkdir src && cd ./src/ && echo "" > index.ts && cd ../

echo '
{
  "name": "module",
  "version": "1.0.0",
  "main": "src/index.ts",
  "scripts": {
    "compile": "tsc",
    "lint": "npx eslint ."
  },
  "keywords": [],
  "author": "@hschhhwwwo0o",
  "license": "ISC",
  "devDependencies": {}
}
' > package.json

echo '
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2020",
    "moduleResolution": "classic",
    "allowArbitraryExtensions": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "outDir": "dist",
    "rootDir": "src"
  }
}

' > tsconfig.json

echo "
dist
node_modules
images
" > .eslintignore

echo "
{
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
" > .eslintrc.json

echo "
# Ignore artifacts:
build
coverage
dist
" > .prettierignore

echo "{}" > .prettierrc.json

echo '
MIT License

Copyright (c) 2023 Saveliy Andronov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
' > LICENSE

npm i --save-dev @typescript-eslint/eslint-plugin
npm i --save-dev @typescript-eslint/parser
npm i --save-dev eslint
npm install --save-dev --save-exact prettier

cd ../../

echo ""
echo "The module has been successfully created! ✅ 🌿"
echo ""
echo "⚠️ Don't forget to add support for the new module to third-party scripts; for example, the linting script and the module compilation script"

exit 0 