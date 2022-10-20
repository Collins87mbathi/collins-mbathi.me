---
date: '2021-08-20T11:50:54.000Z'
title: Event Loops IN JavaScript
tagline: # beginners # javascript # web
preview: >-
  As most developers know, `Javascript` is single-threaded, which means 2 statements in JavaScript cannot be excluded at the same time.
image: >-
  https://dev-to-uploads.s3.amazonaws.com/uploads/articles/navxbbavco9lvnmgrv3c.png
---

As most developers know, `Javascript` is single-threaded, which means 2 statements in JavaScript cannot be excluded at the same time. Execution happens line by line which means each JavaScript statement is synchronous and blocking but there is a way to run your code asynchronously if you use `setTimeout ()`
The event loop is what allows node.js to perform nonblocking I/o operations.
An example of this as we have said is `setTimeout ()`.

```JavaScript
setTimeout(function(){...}, 0)

```

 Simply queues the code to run once the current call stack is finished executing. This can be useful for some things. So yes, it's asynchronous in that it breaks the synchronous flow, but it's not going to execute concurrently/on a separate thread .






