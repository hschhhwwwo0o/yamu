A module designed to display a mock-up on an HTML page using canvas. Includes rendering and downloading the final image.

The module implements the requirements:

| Function             | ID                  |
| :------------------- | :------------------ |
| Downloading a mockup | UF/MOCK-UP/DOWNLOAD |
| Mockup display       | UF/MOCK-UP/RENDER   |

The module has 2 methods:

- _render_ - Render mock-up; The method requires an object argument with a description of the mock-up to be rendered;
- _download_ - Generates a mock-up image and prompts the user for an image download menu. It takes two optional arguments; 1 argument responsible for the image format (png, jpeg, webp); 2 argument - compression coefficient (from 0 to 1, where 1 removes compression and 0 maximally compresses the image)

Example:

```js
const mockUpHTMLRenderer = new MockUpHTMLRenderer("domContainerId", {
  heightInaccuracy: 0,
});

// @requirement UF/MOCK-UP/RENDER
mockUpHTMLRenderer.render({
  frameWidth: number,
  frameHeight: number,
  frameImage: string,
  insertedImage: string,
  paddingsInPercents: {
    paddingTop: number,
    paddingLeft: number,
    paddingBottom: number,
    paddingRight: number,
  },
  borderRadius: number,
});

// @requirement UF/MOCK-UP/DOWNLOAD
mockUpHTMLRenderer.download("png", 1);
```
