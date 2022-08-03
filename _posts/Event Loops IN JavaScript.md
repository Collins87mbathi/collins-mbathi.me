---
date: '2021-08-20T11:50:54.000Z'
title: Event Loops IN JavaScript
tagline: #beginners #javascript #web
preview: >-
  As most developers know,that Javascript is single threaded,means 2 statement in JavaScript cannot be excluded at the sametime.
image: >-
  https://dev-to-uploads.s3.amazonaws.com/uploads/articles/navxbbavco9lvnmgrv3c.png
---

# Introduction

As most developers know,that Javascript is single threaded,means 2 statement in JavaScript cannot be excluded at the sametime.Execution happens line by line which means each JavaScript statement are synchronous and blocking but there is a way to run your code asynchronously,if you use **setTimeout ()**

## continuation

Event loop is what allows node.js to perform non blocking I/o operations.
 Example of this as we have said is setTimeout ().


**setTimeout(function(){...}, 0)** simply queues the code to run once the current call stack is finished executing. This can be useful for some things. So yes, it's asynchronous in that it breaks the synchronous flow, but it's not actually going to execute concurrently/on a separate thread.










