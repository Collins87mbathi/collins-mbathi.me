---
date: "2021-09-28T11:50:54.000Z"
title: Building a Dating App with Mern
tagline: # express # react # beginners # webdev
preview: >-
 We're going to build a dating app with the MERN stack; the web app has simple functionality (see below for a screenshot of the finished app); all data comes from a MongoDB database, with API endpoints set up in Node.js.
image: >-
  https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z9kktscb2pvkb3l0c7mm.jpg
---

# Introduction

We're going to build a dating app with the MERN stack; the web app has simple functionality (see below for a screenshot of the finished app); all data comes from a MongoDB database, with API endpoints set up in Node.js.
![cover](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/aog9s34skeuj3nmyau41.PNG)
In this article, we will build the front end of our dating app using React.js.

React.js is a popular JavaScript library for building user interfaces. It is fast, efficient, and can be used to build complex and responsive user interfaces.
for the Backend side, we will focus on building it using Node.js. We will use MongoDB to store users & messages, Express to build the API, ReactJs for the web app, and Socket.IO to enable real-time communication between users.

In the following section, we will look at some of the prerequisites for this tutorial.

# Prerequisites
The following are required to complete this tutorial:

- [Nodejs](https://nodejs.org/en/)  installed on your system.

- [ Expressjs](https://expressjs.com/)  installed on your system.

- [Reactjs](https://reactjs.com/)  installed on your system.

- Sound knowledge of JavaScript ,Reactjs and Nodejs.

In the following section, we will talk about the technologies we are going to use.

# Overview

Let's start with the front end of React and then move on to the back end.
Create a dating-app-mern folder in your terminal. Use the following inside it:
To make a new app called dating-app-frontend, use `create-react-app`. The commands to accomplish this are as follows:

 ```JavaScript
cd dating-app-mern
npx create-react-app dating-app-frontend

```
### React Basic Setup

Return to the React project and navigate to the directory dating-app-frontend. npm start will launch the React app.

```JavaScript
cd dating-app-frontend
npm start

```
Next, remove any files that you no longer require.

![perez](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1z9fzfsn3fcone8vma4c.PNG)

#### Creating a Header Component

Let's start by making a header component. You must first install Material. because it will provide us with the icons we will use

```JavaScript
npm i @material-ui/core @material-ui/icons
```
Next, inside the src folder, make a components folder. Inside the components folder, create two files: Header.jsx and Header.CSS. There are two icons in header.js: a person icon and a forum icon.
The following is the content of the Header.jsx file.

![article2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hsye32gzwjf3syvdf3ph.PNG)
include the Header component in the App.js file
![article3](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iilrav9uii5yydrwstc6.PNG)

The following information is contained in the header.css file:

![css](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h9dwdirvxbykc187ri5r.PNG)

#### Creating the Dating Cards Component

Let's get started on the second component. Inside the components folder, create two files: DatingCards.js and DatingCards.css. Then, in the App.js file, include the DatingCards component.
You must first install the react-tinder-card package before proceeding. This package includes a feature that generates the swipe effect.

```JavaScript
npm i react-tinder-card
```

After that, paste the content into DatingCards.js. You store the names and images of four people inside a people state variable. Import DatingCard and use it as a component next.
The props mentioned in the react-tinder-card documentation are used here.
The functions swiped and outOfFrame are required. Use the imgUrl background image and display the name in the h3 tag when looping through each person.

![dating1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f5vaqypp3bsgnmvn96is.PNG)

![dating2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nune45e3nkx9lcrro84l.PNG)

###### Creating the Swipe Buttons Component

Let's now make the Swipe component, which is the footer button.
These buttons complement the app's design. Because it is a simple app, they will not function.
Inside the components folder, create two files: Swipe.jsx and Swipe.css. It must also be included in the App.js file.

Swiper.jsx contains content.

![dating](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8egnn6cpxzvynr0sehck.PNG)

The following step is to style the buttons, and the code for doing so is provided below.

![dating2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pb570vuld5gosmwyieuv.PNG)

We have completed the frontend portion.

#### Initial Back-End Setup
Let's get started with the Node.js code on the back end. Make a new folder and call it API.

Then, in the terminal, type `npm init -y` to create a package.json file.

After that, you must install two packages before proceeding. Install Express and Mongoose in the API folder using the terminal.

```JavaScript
npm i express mongoose
```

After that, launch MongoDB and copy the link to our project.

Install the nodemon in the API folder before proceeding. Any changes to the code in the index.js file cause the Node server to restart immediately.

```JavaScript
npm i nodemon
```

#### Initial Route Setup

Let's start with the first route, which checks to see if everything is in order. The Node.js Express package allows you to create routes, which is how the majority of the Internet works. Most back-end languages, such as Node.js and Java, provide the ability to create these routes that interact with databases. The first route does not interact with the database and simply returns a text when accessed via a GET request.

In the API folder, create an index.js file. First, import the Express and Mongoose packages. Then, using Express, create a port variable that will run on port 5001.

```JavaScript
const express = require('express');
const mongoose = require('express');
//App Config
const app = express()
const port = process.env.PORT || 5001
//Middleware
//DB Config
//API Endpoints

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))
```

#### Database User and Network Access
You must create a database user and grant network access in MongoDB.

![database](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lur5pkoovw14m309u6d8.PNG)

#### MongoDB Schema and Routes

MongoDB stores data in JSON format rather than the traditional table structure found in traditional databases such as Oracle. You create the schema file that MongoDB requires. It describes how fields in MongoDB are stored.
Cards are regarded as a collection name in this context, and a value such as cardSchema is stored in the database. It consists of a named object and imgUrl keys. These are the names used in MongoDB. Make a Cards.js file with the following content.


![database1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/raedhxjb2fnbsu3g2vwv.PNG)


You now use the schema to create the endpoint that adds data to the database. The 
MVC pattern is followed here; it is the traditional flow of a web application.

Then, use a POST request to send any data from the user to the database. Any endpoint can be used. If you write an article on Dev.to and then hit the POST button, your article is saved in the Dev.to database once the POST request is made.
The GET endpoints retrieve all database data. Again, any endpoint can be specified. When you browse through the posts in Dev.to, for example, a GET request is sent to the endpoint, which retrieves all posts from the Dev.to database.

In the routes folder, make a folder called routes. Make a file called Card.js. Create a POST request to the /dating/cards endpoint in Card.js. The load is sent to MongoDB via req.body. Then you send dbCard using create(). If it is successful, you will be assigned status 201; otherwise, you will be assigned status 500. The new content is highlighted in bold.
To get the data from the database, create a GET endpoint to /dating/cards.
You're using find() here and getting a success code of 200. (otherwise, status 500).

![router](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ycgtvsz305iyya41915a.PNG)

As you can see from the image, I used a router. Connect it in the index to make life easier. js
Let's use the postman app to check the routes.

You must first complete two tasks before proceeding with the POST request.
First, enable CORS; otherwise, when you deploy the app, you will encounter cross-origin errors.

Install CORS by opening the terminal.

```JavaScript
npm i cors
```
Import CORS into index.js and use it with app.use (). You must also include the express.json() middleware. It is required because it is required to parse the incoming JSON object from MongoDB in order to read the body.


![index](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5v287oo1zfrohocsg8dn.PNG)


#### Bringing the Backend and the Frontend Together 

Let's connect the back and front ends. To call from the front end, use the Axios package. Axios is a JavaScript library that sends API requests to REST endpoints. You've just added two endpoints to the back end. Axios is required to access them. Install the client by opening it.

```JavaScript
npm i Axios
```
Then, create a new axios.js file and an instance of Axios. `http://localhost:5001` is the URL.



```JavaScript
import axios from 'axios'
const instance = axios.create({
 URL: "http://localhost:5001"
})
export default instance

```

Remove the hard-coded information in the people's states from DatingCards.js. Then import the local axios and call the /dating/cards endpoint via the useEffect hook. When you receive the data, use the setPeople() function to reset it. 

```JavaScript

import React, { useState, useEffect } from 'react'
import DatingCard from 'react-tinder-card'
import './DatingCards.css'
import axios from './axios'
const DatingCards = () => {
 const [people, setPeople] = useState([])
 useEffect(() => {
 async function fetchData() {
 const req = await axios.get("/dating/cards")
 setPeople(req.data)
 }
 fetchData()
 }, [])
 const swiped = (direction, nameToDelete) => {
 console.log("receiving " + nameToDelete)
 }

```
![end](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/el1lhrbghri5rx6uxhql.PNG)

We finished our dating app project, and I hope you enjoyed it and learned a lot.
In our next article, we'll go over how to deploy the app on Heroku.
