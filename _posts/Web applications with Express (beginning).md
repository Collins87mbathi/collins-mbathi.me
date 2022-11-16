---
date: '2021-09-10T11:50:54.000Z'
title: Web Applications with Express (A Beginners Guide)
tagline: # javascript # node # express
preview: >-
  Node.js is a runtime environment used for server-side JavaScript. Express.js is a web framework used for server-side JavaScript. It is built on top of Node.js.
image: >-
 https://res.cloudinary.com/practicaldev/image/fetch/s--7ftgnrES--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qal2md48u9ia9983319w.png
---
# Introduction

Node.js is a runtime environment used for server-side JavaScript. Express.js is a web framework used for server-side JavaScript. It is built on top of Node.js.

In this course, we will be building a simple CRUD web application using Express.js. CRUD stands for Create, Read, Update, Delete. 

This course is for beginners. No prior knowledge of Node.js or Express.js is required.

In the following section, we will look at some of the prerequisites for this tutorial.

# Prerequisites
The following are required to complete this tutorial:

- [Node.js](https://nodejs.org/en/) installed on your system.
- Sound knowledge of JavaScript and Nodejs.

## Getting Started
You must first create a directory, navigate to it in your shell, and then install Express with npm by running `npm install express —save`.

Make a file called index.js and add the following code to it, which will create an Express server and add one endpoint to it with the app.get method:

```JavaScript
const express = require('express');
const app = express();
app.get('/', (request, response) => {
 response.send('hello World');
});
app.listen(5000, 'localhost');


```
Use the following command in your shell to run your command script:

```JavaScript
node app.js
```
On port.0, your application will accept connections. If the hostname argument to `app.listen` is not specified, the server will accept connections on both the machine's IP address and localhost. If a port value is 0, the operating system will assign a port that is available.

Once your script is up and running, you can run it in a shell to ensure that you get the expected "Hello World" response from the server:

```JavaScript
curl http://localhost:5000
Hello World

```


