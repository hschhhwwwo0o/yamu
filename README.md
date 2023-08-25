The application is designed to create mock-ups. The application has a choice between different types of devices: phones, watches, tablets

## Development

The project has a non-standard structure. The project is divided into modules and an application that uses the modules to implement the logic. Thus the application (NextJS framework in this case) is responsible only for UI/UX display, while the modules contains all business logic.

Why? To separate business logic from fickle and windy frameworks and libraries that are not related to business logic in any way. Modules are designed so that they can be used independently of the framework; thanks to this, for example, migration from ReactJS to VueJS will be very easy to implement.

To change the logic of module operation and test the result of module operation in the application, you must recompile the module.

Package managment: NPM

## Installation && Running a dev server

To install application and module dependencies, copy this command and run it in the project root:

```sh
cd ./app/yamu-react-app && npm install && cd ../../ && cd ./modules/mock-up-html-renderer && npm install && cd ../../ && cd ./modules/mock-up-generator && npm install && cd ../../ && npm install && npm run re-build-modules
```

Start the dev server using the command in the root of the project:

```sh
npm run dev
```

<!-- CLAIMS.md -->

## Software claims

Requirements are a specification of what needs to be implemented. They describe the behavior of the system, the properties of the system or its attributes. They can serve as constraints in the system development process.

<ins>_Ian Sommerville, Pete Sawyer, 1997_</ins>

#### Quality Attributes

Quality attributes describe the characteristics observed during software execution. They strongly influence the perception of the system by users and the opinion that users have about its quality

<ins>_"Development of software requirements", Third Edition. Carl Vigers, Jay Beatty_</ins>

| Attribute                                  | ID                       |
| :----------------------------------------- | :----------------------- |
| Separation of the mock-up creation process | QA/MOCK-UP/CREATE-STEPS  |
| UI is based on HIG                         | QA/UI/HIG                |
| Localization                               | QA/LOCALIZATION          |
| Interface adaptation                       | QA/UX/ADAPTIVE-INTERFACE |
| WCAG compliance                            | QA/UX/WCAG               |
| Error output                               | QA/UX/ERRORS-LOG         |
| High Lighthouse testing results            | QA/SEO/LIGHTHOUSE        |
| Open Graph support                         | QA/SEO/OPEN-GRAPH        |
| Description of standard meta tags          | QA/SEO/META              |

#### Functional claims

Functional requirements can be written in terms of what the system does or what the user does.

<ins>_"Development of software requirements", Third Edition. Carl Vigers, Jay Beatty_</ins>

| Function                                 | ID                                 |
| :--------------------------------------- | :--------------------------------- |
| Choosing a device                        | UF/MOCK-UP/DEVICE-SELECT           |
| Adding an image inside a mock-up         | UF/MOCK-UP/INSERT-SCREEN           |
| Downloading a mock-up                    | UF/MOCK-UP/DOWNLOAD                |
| Reset the mock-up                        | UF/MOCK-UP/CLEAR                   |
| Mock-up display                          | UF/MOCK-UP/VIEW                    |
| Mock-up Initialization                   | UF/MOCK-UP/INIT                    |
| <br /> Setting up a mock-up              | <br /> UF/MOCK-UP/SETTINGS-UP      |
| Switching the device's system bar        | UF/DEVICE/OPTION-SYSTEM-BAR-TOGGLE |
| Switching the theme of the device system | UF/DEVICE/OPTION-THEME-TOGGLE      |
| BW color correction mock-up              | UF/MOCK-UP/OPTION-BW-STYLE         |

#### Use cases

A use case describes how to use an automated system. It determines what the user should enter, what should be output in response, and what actions should be performed to obtain the output information

<ins>_"Development of software requirements", Third Edition. Carl Vigers, Jay Beatty_</ins>

| ID                | UC/CREATE-MOCK-UP                                                                                                      |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------- |
| Acting person     | Designer                                                                                                               |
| Description       | The user selects the device for which he would like to make a mock-up. Configures the mock-up with subsequent download |
| Output conditions | **UC/CREATE-MOCK-UP/POST-1.** The system asks you to evaluate your work                                                |

<!-- END OF CLAIMS.md -->

## Modules

The project is divided into modules and an application that uses the modules to implement the logic.

#### Module @mock-up-generator

The module is intended for mock-up state management. Includes device selection, image insertion, device settings.

The module implements the claims:

| Function                                 | ID                                 |
| :--------------------------------------- | :--------------------------------- |
| Choosing a device                        | UF/MOCK-UP/DEVICE-SELECT           |
| Adding an image inside a mock-up         | UF/MOCK-UP/INSERT-SCREEN           |
| Reset the mock-up                        | UF/MOCK-UP/CLEAR                   |
| Mock-up display                          | UF/MOCK-UP/VIEW                    |
| Mock-up Initialization                   | UF/MOCK-UP/INIT                    |
| <br /> Setting up a mock-up              | <br /> UF/MOCK-UP/SETTINGS-UP      |
| Switching the device's system bar        | UF/DEVICE/OPTION-SYSTEM-BAR-TOGGLE |
| Switching the theme of the device system | UF/DEVICE/OPTION-THEME-TOGGLE      |
| BW color correction mock-up              | UF/MOCK-UP/OPTION-BW-STYLE         |
| Switching the presence of a watch strap  | UF/MOCK-UP/OPTION-STRAP-TOGGLE     |

<ins>_More documentation about the module is located in the root of the module folder_</ins>

#### Module @mock-up-html-renderer

A module designed to display a mock-up on an HTML page. Includes rendering and downloading the final image

The module implements the claims:

| Function              | ID                  |
| :-------------------- | :------------------ |
| Downloading a mock-up | UF/MOCK-UP/DOWNLOAD |
| Mock-up display       | UF/MOCK-UP/VIEW     |

<ins>_More documentation about the module is located in the root of the module folder_</ins>

## Dictionary of Terms

| Term                  | Meaning                                                                                                              |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------- |
| Export                | The process of saving a layout to a file or to another format that can be used in further development or use.        |
| Devices Library       | A collection of devices available for creating mockups                                                               |
| Mock-up wizard        | Mockup settings panel consisting of several steps                                                                    |
| Mock-up preview       | Mockup display                                                                                                       |
| Mock-up preview scene | The scene in which the mockup is displayed                                                                           |
| Selected device       | The device selected for the mockup                                                                                   |
| System bar            | The system panel, usually located on top and displaying network data, time, and so on                                |
| Inserted screen       | An image of the application design intended to be inserted into the layout                                           |
| Frame                 | Imitation of the device case. Within the framework of the tool, the frame is used as an application design container |
| Device type           | Watch, Phone, Tablet                                                                                                 |
| Device                | Real device; phone/tablet. With a refined model                                                                      |
| Mock-up               | An application design placed inside a frame and displaying how the application design will look on real devices.     |

## Other

The design is developed in Figma.

Task management was performed using GitHub Projects
