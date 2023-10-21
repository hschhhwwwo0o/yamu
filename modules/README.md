### Module development.

The application implements a «modular monolith» architecture. The project is separated into modules and application; modules are responsible for implementing the business logic; application is responsible for rendering the UI and executing the business logic through the modules. Thus, the application (in this case, the NextJS framework) is responsible only for displaying the UI, while the modules contain all the business logic. _Each module performs only one task and should not interact with other modules in any way_. Not all modules implement the subject area - general purpose modules are allowed.

The purpose of this separation is to separate business logic from fickle and windy frameworks and libraries that have nothing to do with business logic. The modules are designed in such a way that they can be used independently of the framework; this makes it very easy to migrate from ReactJS to VueJS, for example.

If you're using macOS or Linux (Doesn't work on Windows¹), you can use the tool to quickly create and configure a new module; run this command in the root of the project:

```sh
bash cli/module_creator.bash
```

At the moment there are 4 modules implemented in the project:

| Module name                     | Meaning of the module                                                                                             | Implements the subject area? |
| :------------------------------ | :---------------------------------------------------------------------------------------------------------------- | :--------------------------- |
| @mock-up-canvas-image-generator | The module is designed to generate an image based on the renderData object                                        | +                            |
| @mock-up-state-generator        | The module is intended for mock-up state management. Includes device selection, image insertion, device settings. | +                            |
| @feedback-creator               | The module is intended for sending feedback by the user.                                                          | +                            |
| @html-image-downloader          | The module is designed for downloading images.                                                                    | -                            |

<ins>Detailed descriptions of the modules and examples of their use are provided in the modules' documentation.</ins>

To change the logic of module operation and check the result of its work in the application, you need to recompile the module. This can be done using the build_modules script; execute this command in the root of the project:

```sh
npm run build-modules
```

If something went wrong, you can compile the modules yourself. To compile a module yourself, go to the module folder and execute the compile command:

```sh
npm run compile
```
