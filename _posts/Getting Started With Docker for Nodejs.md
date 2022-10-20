---
date: "2022-10-28T4:05:54.000Z"
title: Getting Started With Docker for Nodejs
tagline: # javascript # tutorial # node # docker
preview: >-
 How many times have you built an application and it works perfectly on your local machine, but when you share it with someone else, it doesn't work on their machine, and you find yourself arguing, "But it works on my machine."
image: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--7ftgnrES--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c8erz6sztgw7s5pzqjta.png
  
---

##Why Use Docker ?
How many times have you built an application and it works perfectly on your local machine, but when you share it with someone else, it doesn't work on their machine, and you find yourself arguing, "But it works on my machine."
These issues will no longer exist because Docker has come to the rescue.
Docker is a container that contains everything our application requires.

1.The package's version, for example
2.The Requirements
3.The Original Source Code

###Introduction - What is Docker ? 
Docker is an open platform for application development, shipping, and running. Docker allows you to decouple your applications from your infrastructure, allowing you to deliver software more quickly. Docker allows you to manage your infrastructure in the same way that you manage your applications. You can significantly reduce the time between writing code and running it in production by utilizing Docker's methodologies for quickly shipping, testing, and deploying code.

### Docker Features 
Although Docker has many features, we have listed some of the most important ones below.

1.**Easy and fast Configuration** - This is a key feature of Docker that allows us to easily and quickly configure the system.

We can deploy our code with less effort and time. Because Docker can be used in a wide range of environments, the infrastructure requirements are no longer linked to the application's environment.

2.**Increase productivity** - By facilitating technical configuration and allowing for rapid application deployment. Without a doubt, it has increased productivity.

3.**Application Isolation** - It provides containers for running applications in an isolated environment.

4.**Swarm** - It is a clustering and scheduling tool for Docker containers. Swarm uses the Docker API as its front end, which helps us to use various tools to control it.

5.**Routing Mesh** - It routes the incoming requests for published ports on available nodes to an active container. This feature enables the connection even if there is no task is running on the node.

6.**Services** - Services is a list of tasks that lets us specify the state of the container inside a cluster.

7.**Security Management** - It enables us to save secrets into the swarm and then choose which services have access to which secrets.


### How to install Docker 
You can install Docker on your machine based on the operating system you are using. The link to download Docker for your machine based on the operating system is provided below: -

[Docker Installation](https://docs.docker.com/get-started/)

### Images and Containers 
**Images**
They act like blue prints for containers.
Docker images, like templates, serve as a set of instructions for building a Docker container. Docker images can also be used as a starting point when using Docker.
Images are made up from several layers, for example :-
-Dependencies
-Source Code
-Parent Image :- *for parent image it includes the Os and sometimes the runtime environment*
-commands
-Extra configuration eg.*env variables*

**Container**
Is a process of running our Application.

![Drawing](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pptoltprbnq3e54tzlv1.png)
As you can see from the brief description of a drawing above,
Containers run our applications as outlined by the Images .
A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.

###Dockerfiles and creating Images
To demonstrate, we will generate images with Nodejs.
In the IDE of your choice, make a folder called example-docker.
Check that `nodejs` is installed on your machine.
Make a file inside the folder called index.js.
and perhaps inside the index.js file ,You can set up a small server and run it.

```JavaScript
const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000 ;

//routes
app.get('/',(req,res)=> {
res.send("Hello world")
})
//listen
app.listen(PORT, ()=> {
    console.log(`listening to port ${PORT}`);
})
```
create another file in the folder and call it `.Dockerfile`.
This is where we will write our images.
In the Dockerfile what goes at the top is the parent Image.
To add images to our Docker file, we will use several commands.

1. **FROM** - We will use this command to download the environment and specify the version.

```JavaScript
FROM node:17-alpine
```
2. **WORKDIR** - If we add paths, we must also add WORKDIR "the directory" where we want to copy the code. so that the dependencies can be installed.

```JavaScript
FROM node:16-alpine

WORKDIR /server
```
3. **RUN** -  This command will assist us in installing the dependencies for our third image.

```JavaScript 
FROM node:16-alpine

WORKDIR /server

RUN npm install
```
4.**COPY . .** - This command is used to copy the entire source code.
```JavaScript 
FROM node:16-alpine

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .
```
5.**CMD** - This is the command of running the image
the format of writting it will be:

```JavaScript
FROM node:16-alpine

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "index.js"]
```
Our image is ready, now its time you run it in your terminal

```JavaScript
docker build -t "name of image"
```

####Dockerignore file 

If we have a node module file that we want to ignore in our folder, we can use the ignore command.`.dockerignorefile` .

###Staring and Stopping Containers 
- Commands of controlling and image

`docker images` - It provides a comprehensive list of images.

`docker run --name "container name" "image name" ` - This runs the image and creates the container.

`docker ps` - This is to observe the process in action.

`docker stop "container name"` - It halts the container you specified.

`docker start "container name"` - When we run this it runs the container without needing the Image

I hope you enjoyed 🤗🤗 reading the article and learned a lot; in our next article, we will discuss **Managing images ,containers, and how to deploy images in Docker Hub**. Happy Coding 🎉🎉✨
