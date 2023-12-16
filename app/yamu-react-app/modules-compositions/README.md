Compositions modules are modules consisting of UI and business logic linked by a single business task.

UI and business logic are placed in a single module for convenient work on a specific business task and do not have any dependencies with other business tasks. Composition module exports external business task methods and UI components with ready business logic for rendering in the application

A similar move can be observed in the book "From Monolith to Microservices" by Sam Newman, but this approach was called there as "ui modules"
