### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  1. **Callbacks**: Callback functions can be passed as an argument to be completed once previous tasks are completed. These tasks can be other functions. 

  2. **Promises**: Promises can be used to retreive data or run a function, collect that data, then pass it on to another function with .then keyword. Promises are a great way to incorporate error handling as well, although not as easily as with async await. 

  3. **Async/Await**: Async await code can be written without nesting. The code is cleaner and easier to read. Error handling is also much easier since the code is not nested and any error can be passed through to the error handler (even if it's from several different async functions prior). 

  4. **Event Listeners**: Event listeners can be used to react to specific events (like the completion of an asynchronous task) and execute code accordingly using that data or run a function immmediately after completion of the event. 

- What is a Promise?
  1. Promises are code blocks (like functions or API calls) that will be executed in a seperate chain (asynchronously) from the main code block. The can be used to retrieve data needed for the completion of your code, or ran when a specific line of code finishes. A promise is like ordering from a server at a restaurant. You can carry on with your meal and the server will coordinate with the kitchen staff to fulfill your order. When the order is complete, the server will return with your meal. The server took care of your order asynchronously, and now you can complete your bodily function of eating the meal. 

- What are the differences between an async function and a regular function?
  1. Regular functions are run in a linear fashion (1,2,3,4,5 etc.) and run in exactly the order they are written. If function 4 needs data from an outside source or user input, regular functions will not wait for these. Async functions be organized so that wait for data or events before completion. These make writing code more dynamic. Async functions simulate several lines of code being executed dynamically. 

- What is the difference between Node.js and Express.js?
  1. Node is the base layer technology and express is a library written to streamline Node and make it easier to use. Node is a runtime environment that allows the executing of JS code outside of a web browser (allowing JS to be used for back-end development) and Express is a web framework that makes it much easier to develop web applications using Node. 

- What is the error-first callback pattern?
  1. Error first callback pattern means if there is a parameter passed to the next() function, next(e-or-any-parameter) will match this to an error handler that we write at the end of our routes. If there no parameter passed to next(), next() will execute the next function. 

- What is middleware?
  1. Middleware runs before or after each node route. It allows us to execute code that would be helpful to our web application if executed before or after a route. These are commonly logging, authenticating, and handling errors. Middleware chains also allow for multiple middleware functions to be executed as needed in your desired order. 

- What does the `next` function do?
  1. Next executes the next function in the routing chain for node. It can be used to pass parameters to the error handler or simply look for the next matching route. 

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
  1. This code uses getJSON from JQuery which is outdated
  2. This code should be written as a promise all which will send each request at the same time at the store of the function to complete ther request faster. Awaiting each user can be slow. 
  3. This code has no error handling if the users are incorrect
  4. The code should be written with reusability in mind rather than repeating getJSON for each person. 
  5. We should use elieGitData instead of elie. Elie is just a name and we could be more descriptive. 
   