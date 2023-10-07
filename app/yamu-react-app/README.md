Application on <a href="https://nextjs.org">NextJS</a> framework.

## MVC

When building interactive applications, as with other programs, modularity of components has enormous benefits. Isolating functional units from each other as much as possible makes it easier for the application designer to understand and modify each particular unit, without having to know everything about the other units.

Model-View-Controller metaphor and its application structuring paradigm for thinking about (and implementing) interactive application components was developed. Models are those components of the system application that actually do the work (simulation of the application domain). They are kept quite distinct from views, which display aspects of the models. Controllers are used to send messages to the model, and provide the interface between the model with its associated views

<ins>_«A Description of the Model-View-Controller User Interface Paradigm in the Smalltalk-80 System» Glenn E. Krasner and Stephen T. Pope_</ins>

_The architecture of the application is based on MVC, where modules are responsible for the model, mobx is responsible for the controllers, and react is responsible for the view_

## MobX

The controllers are implemented using MobX. Controllers encapsulate the logic of how the view interacts with the model; View only needs to call a controller method; View doesn't think about business logic. Note that for MobX you need to wrap components with `observer`

<ins>_It is very likely that when moving to another UI rendering framework (Vue, Svelte and so on) MobX will have to be replaced by_</ins>

## Styling

Styling is done with <a href="https://tailwindcss.com">TailwindCSS</a>
