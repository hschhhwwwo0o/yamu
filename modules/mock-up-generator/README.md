The module is intended for mock-up state management. Includes device selection, image insertion, device settings.

Available devices:

- iPhone SE
- iPhone 12
- iPhone 13
- iPhone 14 Pro
- iWatch SE

The module implements the claims:

| Function                                 | ID                                 |
| :--------------------------------------- | :--------------------------------- |
| Choosing a device                        | UF/MOCK-UP/DEVICE-SELECT           |
| Adding an image inside a mockup          | UF/MOCK-UP/INSERT-SCREEN           |
| Reset the mockup                         | UF/MOCK-UP/CLEAR                   |
| Mockup display                           | UF/MOCK-UP/VIEW                    |
| Mockup Initialization                    | UF/MOCK-UP/INIT                    |
| <br /> Setting up a mockup               | <br /> UF/MOCK-UP/SETTINGS-UP      |
| Switching the device's system bar        | UF/DEVICE/OPTION-SYSTEM-BAR-TOGGLE |
| Switching the theme of the device system | UF/DEVICE/OPTION-THEME-TOGGLE      |
| BW color correction mockup               | UF/MOCK-UP/OPTION-BW-STYLE         |
| Switching the presence of a watch strap  | UF/MOCK-UP/OPTION-STRAP-TOGGLE     |

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
