---
date: "2021-09-28T11:50:54.000Z"
title: Building a Dating App with MERN
tagline: # express # react # beginners # webdev
preview: >-
  we are going to build a dating app using mern stack, the web app has a simple functionality a screenshot of the finished app below, all the data comes from a MongoDB database, with Api endpoints set in Node.js
image: >-
  https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z9kktscb2pvkb3l0c7mm.jpg
---

we are going to build a dating app using mern stack, the web app has a simple functionality a screenshot of  the finished app below, all the data comes from a MongoDB database, with Api endpoints set in Node.js

![cover](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/aog9s34skeuj3nmyau41.PNG)

Let’s review the React front end and then move to the back end. Open your terminal 
and create a dating-app-mern folder. Inside it, use **create-react-app** to create a new app 
called dating-app-frontend. The following are the commands to do this.
 ```
cd dating-app-mern
npx create-react-app dating-app-frontend

```
#### React Basic Setup

Return to the React project and cd to the dating-app-frontend directory. Start the React 
app with npm start.

```
cd dating-app-frontend
npm start

```

Next delete some of the files that you don't need.

![perez](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1z9fzfsn3fcone8vma4c.PNG)

#### Creating a Header Component

Let's create a header component. First, you must install Material .since its going to provide for us the icons we are going to use

```
npm i @material-ui/core @material-ui/icons
```
Next, create a components folder inside the src folder. Create two files—Header.jsx 
and Header.css—inside the components folder. Header.js has two things: a person 
icon and a forum icon.

The following is the Header.jsx file's content.

![article2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hsye32gzwjf3syvdf3ph.PNG)

include the Header component in the App.js file

![article3](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iilrav9uii5yydrwstc6.PNG)

the header.css file contain the following content

![css](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h9dwdirvxbykc187ri5r.PNG)

#### Creating the Dating Cards Component
Let’s now work on the second component. Create two files—DatingCards.js and 
DatingCards.css—inside the components folder. Then include the DatingCards component in the App.js file.



Before moving forward, you need to install a react-tinder-card package. This 
package has a feature that provides the swipe effect.

```
npm i react-tinder-card
```

Next, put the content in DatingCards.js. Here, inside a people state variable, you store 
the name and images of four people. Next, import DatingCard and use it as a component. 
Here, you use the props mentioned in the react-tinder-card documentation.
The swiped and outOfFrame functions are required. When looping through each 
person, use the imgUrl background image and display the name in the h3 tag.

![dating1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f5vaqypp3bsgnmvn96is.PNG)

![dating2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nune45e3nkx9lcrro84l.PNG)

###### Creating the Swipe Buttons Component

Let’s now create the Swipe component, which are the buttons in the footer. 
These buttons add to the app’s styling. They won’t be functional since it’s a simple app. 
Create two files : Swipe.jsx and Swipe.css inside the components
folder. You also need to include it in the App.js file.

The content in Swiper.jsx

![dating](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8egnn6cpxzvynr0sehck.PNG)

Next, is styling the buttons and the code of styling them is here below

![dating2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pb570vuld5gosmwyieuv.PNG)




we are now through with the frontend part ...

#### Initial Back-End Setup
Let’s move to the back end by starting with the Node.js code.create another folder and name it api

Next, create a package.json file by entering the `npm init -y` command in the terminal. 

After that, You need to install two packages before starting. Open the terminal and install 
Express and Mongoose in the api folder

```
npm i express mongoose
```

after this open the mongoDb and copy the link to link to our project.

Before moving forward, install nodemon in the api folder. Whenever 
you make any changes to the code in the index.js file, the Node server restarts 
instantaneously.

```
npm i nodemon
```

#### Initial Route Setup

Let’s create the initial route, which generally checks whether everything is set up 
correctly. The Express package in Node.js allows you to create routes, which is how most 
of the Internet works. Most back-end languages like Node.js, Java offer capabilities to 
create these routes, which interact with the databases. The initial route doesn’t interact 
with the database and simply returns a text when you go to it, using a GET request.

Create a index.js file in the api folder. Here, you import the Express 
and the Mongoose packages first. Next, use Express to create a port variable to run on 
port 5001.

```javascript
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
In MongoDB, you need to create a database user and provide network access.

![database](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lur5pkoovw14m309u6d8.PNG)

#### MongoDB Schema and Routes

MongoDB stores data in a JSON format instead of the regular table structure found in a 
traditional database like Oracle. You create the schema file required by MongoDB. It tells 
you how fields are stored in MongoDB.



Here, cards is considered a collection name, and you store a value like cardSchema in 
the database. It consists of an object with a name and imgUrl keys. These are the names 
that you use in MongoDB. Create a Cards.js file and put the following content in it.


![database1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/raedhxjb2fnbsu3g2vwv.PNG)


You now use the schema to create the endpoint that adds data to the database. The 
MVC pattern is followed here; it is the traditional flow of a web application.

Next, use a POST request that takes any data from the user and sends it to the 
database. You can use any endpoint. For example, if you write an article on Dev.to 
and hit the POST button, your article is saved in the Dev.to database once the POST 
request is made.
The GET endpoints fetch all the data from the database. Again, you can give any 
endpoint. For example, when you browse through the posts in Dev.to, a GET request is 
sent to the endpoint, which in turn fetches all posts from the Dev.to database.

Create a folder and name it routes in the routes folder create a file and call it Card.js In Card.js, create a POST request to the /dating/cards endpoint. The load is 
in req.body to MongoDB. Then you use create() to send dbCard. If it’s a success, you 
receive status 201; otherwise, you receive status 500. The updated content is marked in 
bold.
Next, create the GET endpoint to /dating/cards to get the data from the database. 
You are using find() here and receive a status 200 on success (otherwise, status 500). 

![router](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ycgtvsz305iyya41915a.PNG)

as you can see in the image i have used router ..so as to make work easier to connect it in the index.js
To check the routes,let's use the postman app

 Before moving forward with the POST request, you need to complete two things. 
First, implement CORS; otherwise, you get cross-origin errors later when you deploy the 
app.

open the terminal and install CORS 

```javascript
npm i cors
```
In index.js, import CORS and use it in with app.use(). You also need to use the 
express.json() middleware. It is required because you need it to parse the incoming 
JSON object from MongoDB to read the body.


![index](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5v287oo1zfrohocsg8dn.PNG)


#### Integrating the backend  with the frontend 

Let’s hook the back end to the front end. Use the axios package to call from the front 
end. Axios is a JavaScript library that makes the API request to the REST endpoint. You 
just created two endpoints in the back end. To access them, you need Axios. Open the client 
and install it.

```javascript
npm i axios
```
Next, create a new axios.js file , and then create an 
instance of axios. The URL is `http://localhost:5001`



```javascript
import axios from 'axios'
const instance = axios.create({
 URL: "http://localhost:5001"
})
export default instance

```

In DatingCards.js, get rid of the hard-coded stuff in the people state. Then import 
the local axios and use the useEffect hook to do the API call to the /dating/cards
endpoint. Once you receive the data, reset it using the setPeople() function. 

```javascript
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

we have completed our dating app project hope you enjoyed it and learnt alot .
we will be talking about how to deploy the app in heroku in our next article

