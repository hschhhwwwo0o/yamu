The module is intended for mock-up state management. Includes device selection, image insertion, device settings.

Available devices:

- iPhone SE
- iPhone 12
- iPhone 13
- iPhone 14 Pro
- iWatch SE

The module implements the claims:

- UF/MOCK-UP/SETTINGS-UP
- UF/MOCK-UP/DEVICE-SELECT
- UF/MOCK-UP/INSERT-SCREEN
- UF/MOCK-UP/CLEAR

The module has 3 methods:

- _selectDevice_ - Selects the device. Takes the argument - the name of the device;
- _insertImage_ - Inserts an image into a mock-up. Accepts a base64 string as an argument;
- _clear_ - Resets the mock-up to default settings. Doesn't accept arguments;

Example:

```js
const mockUpGenerator = new MockUpGenerator();

mockUpGenerator.selectDevice("iPhone 13");
mockUpGenerator.insertImage(base64);
mockUpGenerator.clearMockUp();
```
