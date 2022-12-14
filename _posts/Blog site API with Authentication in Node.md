---
date: "2021-10-11T13:47:17.655Z"
title: Blog API with Nodejs,Expressjs and Mongodb
tagline: # express # react # beginners # webdev
preview: >-
 This is a simple API for a blog. It includes authentication so that only the owner of the blog can create, edit, and delete posts. It uses Node, Express, and MongoDB.
image: >-
 https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kyox46e4lpjoryxftdi7.png
---

# Introduction
This is a simple API for a blog. It includes authentication so that only the owner of the blog can create, edit, and delete posts. It uses Node, Express, and MongoDB.

The API has the following endpoints:

| Method | Endpoint          | Description                                                                |
|--------|-------------------|----------------------------------------------------------------------------|
| POST   | /api/posts        | Creates a new post. Requires authentication.                                 |
| GET    | /api/posts        | Gets all posts.                                                             |
| GET    | /api/posts/:id    | Gets a single post by id.                                                   |
| PUT    | /api/posts/:id    | Updates a post. Requires authentication.                                    |
| DELETE | /api/posts/:id    | Deletes a post. Requires authentication.                                    |
| POST   | /api/register     | Registers a new user.                                                      |
| POST   | /api/login        | Logs in a user.                                                             |
| POST   | /api/logout       | Logs out a user. Requires authentication.    

In the following section, we will look at some of the prerequisites for this tutorial.

# Prerequisites
The following are required to complete this tutorial:

- [Nodejs](https://nodejs.org/en/)  installed on your system.

- [ Expressjs](https://expressjs.com/)  installed on your system.

- Sound knowledge of JavaScript and Nodejs.

-[MongoDB](https://account.mongodb.com/account/login?n=%2Fv2%2F6138758106f1b23e339946e8%23clusters) make a connection with MongoDB database . 
                   
## Setup

Let's get started with the Node.js code. Make a folder called Blog site API.

Then, in the terminal, type `npm init -y` to create a package.json file.

After that, you must install some packages before proceeding.
These packages will be used throughout the project.
Install Express,Mongoose,dotenv,bcryptjs in the api folder using the terminal.

```JavaScript
npm i express mongoose dotenv bcryptjs
```

When the packages are installed, make a file called **.env**. After that, launch MongoDB and copy the link to our project. 

```JavaScript
mongodb+srv://user:password@cluster0.hex8l.mongodb.net/name-database?retryWrites=true&w=majority
```

The MongoDB address We'll use the dotenv package to connect it to the main folder. The package assists us in separating secrets from source code. This is helpful when uploading your project to GitHub. where you may not want to share your database login information with others You instead distribute the source code. As you can see, I need to keep my password hidden in the project.

I've also installed `bcryptjs` as seen above. This package enables us to create a password security platform that scales with computation power and always salts every password.

Let's make our main file and call it index.js. This is where all routes and middleware will be assembled. Before proceeding, import nodemon into the API folder. Any changes to the code in the index.js file cause the Node server to restart instantly.

```JavaScript
npm i nodemon
```

## Initial Route Setup

Let's start with the first route, which checks to see if everything is in order. The Node.js Express package allows you to create routes, which is how the majority of the Internet works. Most back-end languages, such as Node.js and Java, provide the ability to create these routes that interact with databases. The first route does not interact with the database and simply returns a text when accessed via a GET request.

In the API folder, create an index.js file. First, import the Express and Mongoose packages. Next, use Express to create a port variable that will run on the port you will be given, or port 5000 if no ports are available.

```JavaScript
const express = require('express');
const mongoose = require('mongoose');
//App Config
const app = express()
const port = process.env.PORT || 5000
//Middleware
//DB Config
//API Endpoints

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))

```
## Access to the Database and the Network

You must create a database user in MongoDB and grant network access. and use dotenv to connect it to the initial routes because we've saved our link in the.env file .


```JavaScript
const dotenv = require("dotenv");
dotenv.config();


//Database Connection 
Connect.CONNECTDB(process.env.URL);

```

#### Database Schema and Routes

MongoDB, the database we're using, stores data in JSON format rather than the regular table structure found in traditional databases like Oracle. You create the schema file that MongoDB requires. It describes how fields in MongoDB are stored.

First, make a folder called models. Create a file inside the folder and name it 'User.js.' This is where we will write our authentication schema.

### Auth Schema

We will begin by developing the authentication schema for users who register on the site. The user information is saved in the database. As a result, when the user returns later, they will simply log in because the server will recognize them based on the information saved.

```JavaScript
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
     username:{
         type: String,
         required: true,
         unique:true,
         min:3,
         max:20
     },
     email:{
        type: String,
         required: true,
         unique:true

     },
     password:{
        type: String,
        required: true,
        min:3,
        max:10
     },

},

{timestamps: true}

);

module.exports = mongoose.model("User", UserSchema);
```
In addition, as seen in the code above, in the last line, we exported our code in order to import it into the routes.

As you can see, the schema contains details such as username, email, and password that will be stored in the database. When a user attempts to log in, the server will check to see if the user exists in the database and will allow the user if the user details are in the database.

Let us now create the Post Schema in which we will store what we want to be in our post. 

In the models folder, the folder creates a file called 'Post.js,' which is where we will write our Post Schema.
 

```JavaScript
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
 desc: {
     type: String,
    required: true,
 },
 title: {
     type: String,
     required: true,
},
{timestamps: true}
);

module.exports = mongoose.model('Post', PostSchema);
```

Our post schema includes the title and description that will be stored in the database.
The schema is now used to create the endpoint that adds data to the database. The MVC pattern is used here; this is the standard flow of a web application.

Then, use a POST request to send any data from the user to the database. Any endpoint can be used. If you write an article on Dev.to and then hit the POST button, your article is saved in the Dev.to database once the POST request is made.
The GET endpoints retrieve all database data. Again, any endpoint can be specified. When you browse through the posts in Dev.to, for example, a GET request is sent to the endpoint, which retrieves all posts from the Dev.to database.

### routes

Create a folder called routes. We'll start with the Authentication route first. Create a file in the routes folder called Auth.js with the following authentication codes: -
```JavaScript
const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs')
//register endpoint
router.post('/register', async (req,res)=> {
   // const confirm = await User.find({Username : req.body.username ,email : req.body.email})
    //confirm && res.status(400).json('this user or email exist');
    try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

const savedPost = await new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass       

})
     const resultPost = await savedPost.save();
     res.status(200).json(resultPost);
  } catch (error) {
     res.status(500).json(error); 
  }
})
//login endpoint
router.post('/login', async (req,res)=>{
    try {
        const user = await User.findOne({username : req.body.username});
        !user && res.status(400).json('wrong user');

    const validate = await bcrypt.compare(req.body.password,user.password);
        !validate && res.status(400).json('wrong password');

        const {password, ...others} = user._doc;

        res.status(200).json(others);


    } catch (error) {
       res.status(500).json(error); 
    }
})
module.exports = router;
```
As you can see in the code above, we imported the schema and will use it to insert and save the details.

POST a request to the /register endpoint. To MongoDB, the load is in req.body.username,password,email. Then you send the User information using the `New` method. If it is successful, you will be given status 200; otherwise, you will be given status 500. 

To get the data from the database, create a post endpoint to /login.
You're using findOne() here and getting a success code of 200. (otherwise, status 500).
As previously mentioned, we used bcryptjs in the code to protect our passwords.

Let's go to the Post routes, shall we? Make a file called 'Post.js' in the routes folder. The Post file's codes are listed below.

```JavaScript
const router = require('express').Router();
const Post = require('../models/Post');
//create post 
router.post('/', async (req,res)=> {
try {
    const savePost = await new Post(req.body);
    const savedPost = await savePost.save()
    res.status(200).json(savedPost);

} catch (error) {
    res.status(500).json(error);
}

})
//update post
router.put('/:id', async (req,res)=> {
 try {
    const post = await Post.findById(req.params.id);
    if(post.userId === req.body.userId) {
      await Post.updateOne({$set:req.body});
     res.status(200).json('it has been updated);

    } else {
        res.status(403).json('you can only update your post');
    }
 } catch (error) {
     res.status(500).json(error)
 }

})
//delete post 
router.delete('/:id', async (req, res)=> {
  try {
   const post =  await Post.findById(req.params.id);
   if (post.userId === req.body.userId) {
      await Post.delete()
      res.status(200).json('the post is deleted)
   } else {
       res.status(403).json("you can only delete your post")
   }
  } catch (error) {
    res.status(500).json(error)  
  }

})
//get All posts 
router.get('/', async (req,res) => {
  try {
   const posts = await Post.find();
  res.status(200).json(posts);

  } catch (error) {
   res.status(500).json(error); 
  }
})
//get one post 
router.get('/:id',async(req,res)=> {

  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
})
module.exports = router;

```

In our code above, we created our post, saved it, were able to edit it, delete it, and could retrieve all of the posts or just one.

First, we create the post using the `post` method and save it as directed. We used the `put` method to edit the post, and after finding it using the `findById` method provided by the mongoose package, we used the `update` method to update the post. 
in the third method, we use the `delete`. where we find the post we want to delete using the `findById` method and use the delete() to delete the post.
Also, in the last line of our code, we have exported our code using a router and used the first get to find only one post and the second get to find all the posts. This enables us to easily track our handle request and send it to the main file index. Let me demonstrate in the screenshot below.

![index](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdj7np1huo8r7e8x9wry.PNG)

As shown in the above screenshot, we can now access our routes as middleware by using the `use()` function. When we import our codes, the router function makes it easier.

example `import authroute = require('./routes/Auth');`
 Finally, as shown, we create the endpoint `/api/blog` and the router.
Let's not forget about the express. json() middleware is a method built into express that recognizes the incoming Request Object as a JSON Object because our data is in JSON.

Thank you for reading the article. I hope you learned a lot from it. In the next article, we will learn how to test it in Postman Software.