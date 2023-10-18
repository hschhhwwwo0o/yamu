The module is designed to generate an image based on the renderData object

The module implements the requirements:

| Function               | ID                        |
| :--------------------- | :------------------------ |
| Mock-up image generate | UF/MOCK-UP/IMAGE-GENERATE |

The module has 1 method:

- _imageGenerate_ - Generate base64 image string

Example:

```js
const mockUpCanvasImageGenerator = new MockUpCanvasImageGenerator();

// @requirement UF/MOCK-UP/IMAGE-GENERATE
mockUpCanvasImageGenerator.imageGenerate({
  frameHeight: 0,
  frameWidth: 0,
  insertedImage: "",
  paddingsInPercents: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
  borderRadius: 0,
  frameImage: "",
  isBW: false,
});
```
