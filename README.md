# Sprint Challenge: State Management - Smurfs

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored the context API, the reducer pattern, and Redux. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web.

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency throughout State Management and your command of the concepts and techniques in the the context API, the reducer pattern, and Redux.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

In this challenge, you are to build a Smurfs village utilizing context or Redux as your state management. Build this challenge from the ground up using what you have learned about state management.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What problem does the context API help solve?

  The Context API helps you avoid prop drilling when you need certain information in multiple sections of a component tree.

- [ ] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  Actions: Actions are objects that have a type property. This is where you say what the action being performed is, for example "ADD_ITEM". Actions typically also have a payload property where you carry the necessary data for the object.
  Reducers: A reducer is where you specify how the state will changed in response to the action that is triggered. It's a pure function that takes in the previous state and the action. There are never side effects in side of a reducer, only modifies state without mutating it.
  Store: The store holds all the state for the application, and it can only be changed via dispatching actions. Regardless of the size of an application, you only have one Store and instead will divide up your reducers into more specific groups. This is valuable because you can't accidentally mess up your state via side effects or miscellaneous changes in your code, it will only update upon intentional action dispatches. That is why it is known as a single source of truth.

- [ ] What is the difference between Application state and Component state? When would be a good time to use one over the other?

  Application state is data that is needed throughout your application, and usually it can be updated or changed by multiple components. Application state also will be referenced/accessed multiple times. Component state is data that is only used within a single component. One very clear example of this is form inputs, where you need to track each keystroke but the application does not need to be aware of it. With each piece of data you'll want to consider where it needs to be accessed in order to determine if you should use Component or Application state.

- [ ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  Thunk is a middleware that allows us to handle asynchronous actions in Redux. Every time an action is called, thunk inercepts and performs something with the returned data. It sends actions forward to the reducer like usual, but is able to invoke the thunks (or functions) it receives and passes in the dispatch function, so that we are able to run an API call (or other asynchronous action) and dispatch an action within the .then(). Without thunk, your action creators can't return a function, they can only return an action object. We can then wait until the data is received from an API call before the action is triggered and the page reloads, avoiding issues of the page trying to load before data is present.

- [ ] What is your favorite state management system you've learned and this sprint? Please explain why!

  I find the Context API significantly easier to understand, but that is because I had a bit of prior experience with it. However, I think that Redux is more powerful and is an incredible tool. I want to become more proficient with it and think it will serve me better in my future projects than the Context API. I see a lot of value in the actions/reducers because I appreciate code that makes it clear what is happening, and I'd say an all caps description of the last action is pretty clear.

## Project Set Up

Follow these steps to set up your project:

- [ ] `fork & clone` this repository.
- [ ] `cd` into the forked copy of this repository.
- [ ] **RUN** `npm install` to retrieve all `server-side` the dependencies.
- [ ] **RUN** `npm start` to get your API up and running on `http://localhost:3333`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [ ] After your API is up and running, you can open chrome and type in `http://localhost:3333/smurfs`. You should see an array with one smurf in it returned to you. This is an array that your **API** will be using to store our Smurf Data.
- [ ] **LOOK** at your `smurfs` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [ ] **Open** `src/index.js` to make sure that your app is ready to roll with the proper middleware.
- [ ] **cd** into `smurfs` and run `npm install` to retrieve the client side dependencies.
- [ ] **RUN** `npm start` to fire up your React application. There ought to be a pretty little message awaiting you welcoming you to the app. `Follow` the prompting.

**LOOK** at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.

## Minimum Viable Product

- [ ] Plan and implement how you are going to manage your state for your application
- [ ] You _must_ use either context or Redux as your state management system
- [ ] Once you have planned out your state management system, fetch data from the smurf server and display the data it returns
- [ ] Add a form to collect info for a new smurf, and make a POST request to the server to add a new smurf to your village

## API documentation

### GET '/smurfs'

- [ ] Retrieve an array all the Smurfs in the Smurf DB by writing a `GET` to the endpoint `/smurfs`.
- [ ] Double check that your response from the server is an array of smurfs.

```js
[
  {
    name: 'Brainey',
    age: 200,
    height: '5cm',
    id: 0,
  },
];
```

### POST '/smurfs'

- [ ] Design the functionality to add a smurf to the Smurf DB you'll need all three fields. `name`, `age`, and `height`.

Example of the shape of data to be sent to the `POST` endpoint:

```js
{
  name: 'Brainey',
  age: 200,
  height: '5cm'
}
```

- [ ] Double check to make sure that a smurf is created correctly once your functionality is built out.

Initially Brainey will be in the array, but it takes more than one smurf to make the village. Be sure to add a few smurfs to populate our smurf village.

**HINT** if you are going to be working on Stretch Problem, you'll need to use that unique `id`.

Example of object created in Smurf DB:

```js
[
  {
    name: 'Brainey',
    age: 200,
    height: '5cm',
    id: 0,
  },
  {
    name: 'Sleepy',
    age: 200,
    height: '5cm',
    id: 1,
  },
];
```

## STRETCH PROBLEM

The following two endpoints are here for you if you'd like to push yourselves a little further.

### PUT '/smurfs/123', where 123 is the Id of the smurf you want to modify

- [ ] For this endpoint to work, you'll need an `id` added to the URL, and at least one field to update on the Smurf object. `name` `age` `height`.

Example:

```js
input:
{
  id: 1,
  name: 'Grumpy'
}
output:
[
  {
    name: 'Grumpy',
    age: 30,
    height: '3cm',
    id: 1
  },
  {
    name: 'Sleepy',
    age: 211,
    height: '2cm',
    id: 0
  }
]
```

### DELETE '/smurfs/123', where 123 is the Id of the smurf you want to remove

For this endpoint to work, all you need is an id sent up as part of the request url.

If your delete worked, you'll get a an array back with all of the smurfs but with your requested smurf removed.

- [ ] You don't need any input beyond the url parameter of the smurf, so if we send up a delete request to `/smurfs/123` then you'll remove the smurf by that id.

Example:

```js
output: [
  {
    name: 'Sleepy',
    age: 200,
    height: '5cm',
    id: 1,
  },
];
```
