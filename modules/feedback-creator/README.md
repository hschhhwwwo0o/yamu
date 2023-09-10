The module is intended for sending feedback by the user

The module implements the requirements:

| Function         | ID                 |
| :--------------- | :----------------- |
| Sending feedback | UF/FEEDBACK/CREATE |

The module has 1 method:

- _createFeedback_ - Sends feedback to the server

Example:

```js
const feedbackCreator = new FeedbackCreator();

feedbackCreator.createFeedback();
```
