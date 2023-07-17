### Development

The project has a non-standard structure. The project is divided into modules and an application that uses the modules to implement the logic. Thus the application (NextJS framework in this case) is responsible only for UI/UX display, while the modules contains all business logic.

Why? To separate business logic from fickle and windy frameworks and libraries that are not related to business logic in any way. Modules are designed so that they can be used independently of the framework; thanks to this, for example, migration from ReactJS to VueJS will be very easy to implement

#### Installation

To install application and module dependencies, copy this command and run it in the project root

```sh
cd ./app/yamu-react-app && npm install && cd ../../ && cd ./modules/mock-up-html-renderer && npm install && cd ../../
```

#### Module @mock-up-generator

The module is intended for mock-up state management. Includes device selection, image insertion, device settings

The module implements the claims:

- UF/MOCK-UP/SETTINGS-UP - Setting up a device
- UF/MOCK-UP/DEVICE-SELECT - Device selection
- UF/MOCK-UP/INSERT-SCREEN - Adding an image inside a mock-up
- UF/MOCK-UP/CLEAR - Clear mock-up state

_More documentation about the module is located in the root of the module folder_

#### Module @mock-up-html-renderer

A module designed to display a mock-up on an HTML page. Includes rendering and downloading the final image

The module implements the claims:

- UF/MOCK-UP/VIEW - Mock-up rendering
- UF/MOCK-UP/DOWNLOAD - Download mock-up image

_More documentation about the module is located in the root of the module folder_
