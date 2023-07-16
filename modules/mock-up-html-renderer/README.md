A module designed to display a mock-up on an HTML page. Includes rendering and downloading the final image.

The module implements the claims:

- UF/MOCK-UP/VIEW
- UF/MOCK-UP/DOWNLOAD

The module has 2 methods:

- _render_ - Render mock-up; The method requires an object argument with a description of the mock-up to be rendered;
- _download_ - Generates a mock-up image and prompts the user for an image download menu

Example:

```js
const mockUpHTMLRenderer = new MockUpHTMLRenderer("#domContainerId");

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
});
mockUpHTMLRenderer.download();
```
