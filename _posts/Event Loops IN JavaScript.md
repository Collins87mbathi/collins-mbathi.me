---
date: '2021-08-20T11:50:54.000Z'
title: Event Loops IN JavaScript
tagline: # beginners # javascript # web
preview: >-
  As most developers are aware, `Javascript` is single-threaded, which means that two JavaScript statements cannot be excluded at the same time.
image: >-
  https://dev-to-uploads.s3.amazonaws.com/uploads/articles/navxbbavco9lvnmgrv3c.png
---

As most developers are aware, `Javascript` is single-threaded, which means that two JavaScript statements cannot be excluded at the same time. Because execution occurs line by line, each JavaScript statement is synchronous and blocking, but there is a way to run your code asynchronously by using`setTimeout ()`.
The event loop is responsible for node.js's ability to perform nonblocking I/O operations.
An example of this as we have said is `setTimeout ()`.

```JavaScript
setTimeout(function(){...}, 0)

```

Simply queues the code for execution once the current call stack has completed. This can be useful in some situations. So, while it is asynchronous in the sense that it interrupts the synchronous flow, it will not execute concurrently/on a separate thread.








