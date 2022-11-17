---
date: "2022-11-17T23:50:54.000Z"
title: Reactjs Protected Route
tagline: # express # react # beginners # webdev
preview: >-
 React Router provides a convenient way to define protected routes that require authentication in order to access. By default, these routes are treated as public routes and anyone can access them.
image: >-
  https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2yzt7cys3798n3v3aqyd.png
---

## Introduction

React Router provides a convenient way to define protected routes that require authentication in order to access. By default, these routes are treated as public routes and anyone can access them.

To create a protected route, you need to use the React Router Route component and specify the path that you want to protect. Then, you can use the render prop function to conditionally render the component that you want to protect.

If the user is not authenticated, they will be redirected to the login page. Otherwise, they will be able to access the protected route.

In the following section, we will look at some of the prerequisites for this tutorial.

## Prerequisites

The following are required to complete this tutorial:

* Knowledge of JavaScript and React.

* Knowledge about Redux toolkit

* Nodejs should be installed on your system.

* npm should be installed on your system.

In the following section, we will delve into the details of this protected Route.

## About Protected Route

In web applications, routing is the process of determining how to respond to a client request for a specific URL. In React, this is typically accomplished using the React Router library.

React Router provides a number of different ways to configure how your application renders the different URLs that it supports. One of the options that you can specify is whether or not a given route should be protected.

A protected route is one that can only be accessed by an authenticated user. If a user tries to access a protected route and they are not logged in, they should be redirected to the login page.

In our next section we will be talking about Redux which we will be using in our tutorial

## Understanding Redux toolkit

Redux is a toolkit for managing state in JavaScript applications. It is used in conjunction with React and other frameworks.

Redux provides a streamlined way to manage state changes in your application. It includes a set of tools for managing actions, reducers, and middleware. It also provides a way to connect your application to a store.

Redux is a great toolkit for managing state in JavaScript applications.

We are going to use it to store our user details .

In our next section, we are now going to get to the code

## Building A simple Web Page with Reactjs demonstrating Protected Route
 
In this part of this tutorial, we will use Reactjs, Redux toolkit and react-router-dom  to build a simple web page demonstrating protected Route. The project directory structure for our microservice app is shown below

```bash
|   .gitignore
|   package-lock.json
|   package.json
|   README.md
|   
+---public
|       favicon.ico
|       index.html
|       logo192.png
|       logo512.png
|       manifest.json
|       robots.txt
|       
\---src
    |   App.js
    |   index.js
    |   
    +---Home
    |       Home.jsx
    |       
    +---Login
    |       Login.jsx
    |       
    +---Redux
    |   |   store.js
    |   |   
    |   \---Slice
    |           Slice.js
    |           
    \---utils
            ProtectedRoute.js

```

First we need to create our React application boilerplate

Go to your terminal and run the following command below :

`npx create-react-app protected-route`

After it has been created, open the folder in a code editor, such as Visual Studio Code.
Remove any unnecessary files from the folder that will not be used in this tutorial.

### Installing Dependencies 

To install the dependencies needed for this tutorial, open your code editor's terminal and type the following command.

`npm i react-router-dom react-redux redux`

### Creating a Home Page
Create a directory, call it Home, then inside it have a file Home.jsx with the following code.

```React
import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home

```

### Creating a Login Page

Create a directory, call it Home, then inside it have a file Login.jsx with the following code.

```React
import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login

```

### Setting up the routes

Navigate to your app.js file in your src directory and write the code below.

```React
import Home from "./Home/Home";
import Login from "./Login/Login";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
```
lets look at some facinating code we have just written.

first we have imported `react-router-dom` package

```React
import {BrowserRouter,Route,Routes} from "react-router-dom";
```
We have created Routes for our components so that we can navigate through them in our page, specifically the Home and Login components.

In the following section, we will set up our redux.

## Creating our Redux

Create a new folder for redux and name it Redux. Within the Redux folder, create a new folder and name it Slice. Make a file called userSlice.js in the slice folder.
Inside the slice.js file write this code below :

```React
import  {createSlice} from '@reduxjs/toolkit';

const initialState = {
    
    state: {
        isFetching: false,
    },
    user:{
  name:"collins",
  isAuthenticated:true
},
}


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsFetching : (state) => {
        state.state.isFetching = true;
  }, 
  }  
});

export const {
      setIsFetching,
    } = userSlice.actions;


export default userSlice.reducer;
```
In our code, we created a redux slice that only stores two properties in our user object.

These are the specifics we'll use to design our secure route. They are the qualifications.

### creating the redux store 

Create a store.js file in the Redux folder and enter the code below.

```React
import {configureStore} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
  
 import userReducer from "./Slice/Slice";

  const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };

  const rootReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: { user: rootReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);
export default store;
```
As can be seen in the code above, this store.js file is where we pass our reducers and add logic about whether we want the data we're managing to persist or not.

### Passing the Store Prop

Navigate to your src folder's index.js file and wrap the content within with the store module so that it is effective in all of our components ,We will accomplish this with the help of the Provider component imported from the `react-redux` package.
Insert it as shown in the code below.

```React
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App />
</Provider>
);

```
### Creating the Protected Route File

Navigate to your src folder and make a folder called utils. Inside the utils folder, make a file called ProtectedRoute.js

Write the following code in the ProtectedRoute.js file.

```React
import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const user = useSelector((state) => state.user);
    let location = useLocation();

    if(!user.state.isAuthenticated) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children
  
};

export default ProtectedRoute;
```

As seen in the code above, we first import our `useSelector` from our `react-redux` package, which will allow us to access our user object that is stored on our redux. 

After that, as you can see, we write some logic to check if isAuthenticated is true, and if it is, we should return the user to the Home screen if its not then the user should be Navigated to the login. 
In the following section, we will wrap our protected Route module.
 
### Wrapping the Protected Route Module

Return to your app.js folder and update your code to the following.

```React
import Home from "./Home/Home";
import Login from "./Login/Login";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={
        <ProtectedRoute>
        <Home/>
        </ProtectedRoute>
     }/>
        <Route path="/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
```
As seen in the code below, we've wrapped the module around the route we want to secure. In our case, the Home page must be authenticated in order to be accessed; otherwise, the user will be directed to the login page in order to be authenticated and able to access the Home page.

Congratulations, you now have a web page with a protected Route.

The complete source code is available [here](https://github.com/Collins87mbathi/protected-Route-in-Reactjs) for your reference.

Congratulations, you have completed the tutorial. How did you find it? I'm sure it's fantastic.

## Conclusion

In conclusion, the Reactjs Protected Route is a great way to keep your users' data safe and secure. By using this type of route, you can ensure that only authorized users can access certain areas of your website. This is a great way to keep your site's data safe and secure and to keep your users' information confidential.
Thank you for taking the time to read this, and I hope to see you in the next one. Have a good time exploring  ✨✨✨.

 