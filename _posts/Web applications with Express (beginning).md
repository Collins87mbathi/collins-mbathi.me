---
date: '2021-09-10T11:50:54.000Z'
title: Web applications with Express (beginning)
tagline: # javascript # node # express
preview: >-
  Express is a minimal and flexible Node.js web application framework, that provides a robust set of features for building web applications.
image: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--7ftgnrES--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qal2md48u9ia9983319w.png
---
Express is a minimal and flexible Node.js web application framework, that provides a robust set of features for building web applications.

##### GETTING STARTED

you first need to create a directory, access it in your shell, and install Express using npm by running `npm install express --save`

Create a file and name it index.js and add the following code which creates an Express server and adds one endpoint to it with the app.get method:

```JavaScript
const express = require('express');
const app = express();
app.get('/', (request, response) => {
 response.send('hello World');
});
app.listen(5000, 'localhost');


```
To run your command script use the following command in your shell :
```JavaScript
node app.js
```
Your application will accept connections on port.0. If the hostname argument to `app.listen` is
omitted, then the server will accept connections on the machine's IP address as well as localhost. If a port value is 0, the operating system will assign an available port.

Once your script is running, you can test it in a shell to confirm that you get the expected response, "Hello World", from
the server:

```JavaScript
curl http://localhost:5000
Hello World

```






