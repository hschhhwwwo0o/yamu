![GitHub Light](./md/GitHubCover.light3.png#gh-light-mode-only)
![GitHub Dark](./md/GitHubCover.dark3.png#gh-dark-mode-only)

The application is designed for creating mock-ups. Create product mock-ups with the online mock-up generator. Simply select a mock-up, upload your design and download a watermark-free image.

## Development

Tracking of tasks was done using GitHub Projects.

The development of the project was divided into several stages:

1. Requirements development
2. Design development
3. Module development
4. Application development

### 1. Development of software requirements

Before starting to develop the code base I tried to think thoroughly about all the requirements for the future software product. I formulated functional requirements, user requirements, quality attributes; I compiled a data dictionary and a dictionary of terms. At this stage of development I was guided by the book "Development of software requirements," Carl Vigers, Jay Beatty.

I have created a unique identifier for each requirement. At the stage of code writing, I marked in comments the identifier of the requirement that I will implement; thanks to this it will be easy to find the implementation of a certain requirement in the code base. You can read more about it in the book. In the book it is called _requirements tracking_.

### 2. Design development

I did the design development on my own. The design of the application was developed in Figma. The design was developed in accordance with the previously developed software requirements. I downloaded image devices frames from the Internet and edited them in Photoshop.

### 3. Module development

I didn't start the program development with code. The first thing I started to think about was the architecture of the project and how to conveniently separate the business logic from the UI. At this stage I tried to be guided by Robert Martin's book "Clean Architecture". In the end, I decided to separate the business logic into modules.

The project has a non-standard structure. The project is divided into modules and an application that uses the modules to implement the logic. Thus, the application (in this case the NextJS framework) is responsible only for displaying UI, while the modules contain all the business logic. For myself, I decided that _each module performs only one task and should not interact in any way with other modules_

Why? To separate business logic from fickle and windy frameworks and libraries that have nothing to do with business logic. Modules are designed in such a way that they can be used independently of the framework; thanks to this, for example, migration from ReactJS to VueJS will be realized very easily.

At the moment there are 2 modules implemented in the project:

| Module name                                                                                                              | Meaning of the module                                                                                                    |
| :----------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| <a href="https://github.com/hschhhwwwo0o/yamu/tree/main/modules/mock-up-html-renderer#readme">@mock-up-html-renderer</a> | A module designed to display a mock-up on an HTML page using canvas. Includes rendering and downloading the final image. |
| <a href="https://github.com/hschhhwwwo0o/yamu/tree/main/modules/mock-up-generator#readme">@mock-up-generator</a>         | The module is intended for mock-up state management. Includes device selection, image insertion, device settings.        |

Detailed descriptions of the modules and examples of their use are provided in the modules' documentation.

To change the logic of the module and test the result of its work in the application, you need to recompile the module. The necessary command to recompile an individual module can be found in <a href="https://github.com/hschhhwwwo0o/yamu/blob/main/package.json">package.json<a/>.

For example, to compile the @mock-up-generator module, run the following command:

```sh
npm run build-mock-up-generator-module
```

### 4. Application development

By this I mean the layout of the application and the use of already created modules in it.

### Installation

To install the repository, paste this command into your terminal:

```sh
git clone https://github.com/hschhhwwwo0o/yamu.git
```

To install application and module dependencies, copy this command and run it in the project root:

```sh
cd ./app/yamu-react-app && npm install && cd ../../ && cd ./modules/mock-up-html-renderer && npm install && cd ../../ && cd ./modules/mock-up-generator && npm install && cd ../../ && npm install && npm run re-build-modules
```

Start the dev server using the command in the root of the project:

```sh
npm run dev
```

## Dictionary of Terms

"A dictionary of terms defines all the specialized terms that the reader needs to know in order to properly understand the software requirements specification"

<ins>_"Development of software requirements", Third Edition. Carl Vigers, Jay Beatty_</ins>

The term dictionary is intended to ensure that the same terms are used throughout the code base. For example, to eliminate the use of synonym words.

| Term                  | Meaning                                                                                                               |
| :-------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| Export                | The process of saving a layout to a file or to another format that can be used in further development or use.         |
| Devices Library       | A collection of devices available for creating mockups.                                                               |
| Mock-up wizard        | Mockup settings panel consisting of several steps.                                                                    |
| Mock-up preview       | Mockup display.                                                                                                       |
| Mock-up preview scene | The scene in which the mockup is displayed.                                                                           |
| Selected device       | The device selected for the mockup.                                                                                   |
| System bar            | The system panel, usually located on top and displaying network data, time, and so on.                                |
| Inserted design       | An image of the application design intended to be inserted into the layout.                                           |
| Frame                 | Imitation of the device case. Within the framework of the tool, the frame is used as an application design container. |
| Device type           | Watch, Phone, Tablet.                                                                                                 |
| Device                | Real device; phone/tablet. With a refined model.                                                                      |
| Mock-up               | An application design placed inside a frame and displaying how the application design will look on real devices.      |
| HIG                   | A set of guidelines for designers.                                                                                    |
| WCAG                  | A set of guidelines on how to create an interface and how to check its accessibility for users with disabilities.     |
| Open Graph            | Micro markup for SEO.                                                                                                 |
| Lighthouse            | Automated tool for measuring the quality of web pages.                                                                |

<!-- CLAIMS.md -->

## Software claims

"Requirements are a specification of what needs to be implemented. They describe the behavior of the system, the properties of the system or its attributes. They can serve as constraints in the system development process."

<ins>_Ian Sommerville, Pete Sawyer, 1997_</ins>

### Quality Attributes

"Quality attributes describe the characteristics observed during software execution. They strongly influence the perception of the system by users and the opinion that users have about its quality."

<ins>_"Development of software requirements", Third Edition. Carl Vigers, Jay Beatty_</ins>

| Attribute                                  | ID                       | Description / Why it's necessary                                                |
| :----------------------------------------- | :----------------------- | :------------------------------------------------------------------------------ |
| Separation of the mock-up creation process | QA/MOCK-UP/CREATE-STEPS  | Separation the process into steps is necessary for a better UX                  |
| UI is based on HIG                         | QA/UI/HIG                | HIG is essential for a better UX                                                |
| Localization                               | QA/LOCALIZATION          | Localization is necessary because the product can be used by foreign users      |
| Interface adaptation                       | QA/UX/ADAPTIVE-INTERFACE | An adapative interface is needed to better display the app on different devices |
| WCAG compliance                            | QA/UX/WCAG               | WCAG is needed for a better UX for people with disabilities                     |
| Error output                               | QA/UX/ERRORS-LOG         | Necessary for a better UX                                                       |
| High Lighthouse testing results            | QA/SEO/LIGHTHOUSE        | Necessary to improve search engine rankings                                     |
| Open Graph support                         | QA/SEO/OPEN-GRAPH        | Necessary to improve search engine rankings                                     |
| Description of standard meta tags          | QA/SEO/META              | Necessary to improve search engine rankings                                     |

### Functional claims

"Functional requirements can be written in terms of what the system does or what the user does."

<ins>_"Development of software requirements", Third Edition. Carl Vigers, Jay Beatty_</ins>

In this table, I display the description of a specific functional requirement, its unique identifier and its belonging to a specific module.

| Function                                 | ID                                 | Responsible module     |
| :--------------------------------------- | :--------------------------------- | :--------------------- |
| Downloading a mock-up                    | UF/MOCK-UP/DOWNLOAD                | @mock-up-html-renderer |
| Mock-up display                          | UF/MOCK-UP/VIEW                    | @mock-up-html-renderer |
| Getting affordable devices               | UF/DEVICES-LIBRARY/GET             | @mock-up-generator     |
| Choosing a device                        | UF/MOCK-UP/DEVICE-SELECT           | @mock-up-generator     |
| Adding an design inside a mock-up        | UF/MOCK-UP/INSERT-DESIGN           | @mock-up-generator     |
| Reset the mock-up                        | UF/MOCK-UP/CLEAR                   | @mock-up-generator     |
| Mock-up initialization                   | UF/MOCK-UP/INIT                    | @mock-up-generator     |
| <br /> Setting up a mock-up              | <br /> UF/MOCK-UP/SETTINGS-UP      | @mock-up-generator     |
| Switching the device's system bar        | UF/DEVICE/OPTION-SYSTEM-BAR-TOGGLE | @mock-up-generator     |
| Switching the theme of the device system | UF/DEVICE/OPTION-THEME-TOGGLE      | @mock-up-generator     |
| BW color correction mock-up              | UF/MOCK-UP/OPTION-BW-STYLE         | @mock-up-generator     |

### Use cases

"A use case describes how to use an automated system. It determines what the user should enter, what should be output in response, and what actions should be performed to obtain the output information."

<ins>_"Development of software requirements", Third Edition. Carl Vigers, Jay Beatty_</ins>

| ID                | UC/CREATE-MOCK-UP                                                                                                      |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------- |
| Acting person     | User                                                                                                                   |
| Description       | The user selects the device for which he would like to make a mock-up. Configures the mock-up with subsequent download |
| Output conditions | **UC/CREATE-MOCK-UP/POST-1.** The system asks you to evaluate your work                                                |

<!-- END OF CLAIMS.md -->

## Literature

The development process was strongly influenced by the books:

- "Development of software requirements," Carl Vigers, Jay Beatty;
- "Clean Architecture" by Robert Martin;
- "Envisioning Information" Edward R. Tufte;
- "A Description of the Model-View-Controller User Interface Paradigm in the Smalltalk-80 System" Glenn E. Krasner and Stephen T. Pope;
