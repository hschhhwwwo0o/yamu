The module is designed for downloading images.

The module implements the requirements:

| Function              | ID                  |
| :-------------------- | :------------------ |
| Downloading a mock-up | UF/MOCK-UP/DOWNLOAD |

The module has 1 method:

- _download_ - Download image

Example:

```js
const htmlImageDownloader = new HTMLImageDownloader();

// @requirement UF/MOCK-UP/DOWNLOAD
htmlImageDownloader.download("image base64 string or image url");
```
