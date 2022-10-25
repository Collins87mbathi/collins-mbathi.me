---
date: '2022-07-05T13:47:01.690Z'
title: Using Javascript to Implement Stacks
tagline: # javascript # node # data structures
preview: >-
  A stack is a data structure that allows you to store data in a way that allows you to access the data in a last-in, first-out (LIFO) manner.
image: >-
 https://dev-to-uploads.s3.amazonaws.com/uploads/articles/smemzu357dz1z2vtxgfc.png
---
# Introduction

A stack is a data structure that allows you to store data in a way that allows you to access the data in a last-in, first-out (LIFO) manner. The last data item you add to the stack is the first data item you can remove from the stack.
JavaScript provides several ways to implement stacks. In this article, we'll look at how to use the Array data structure to implement a stack in JavaScript.
In the real world, we can say, for example, when you pile a lot of pancakes together as shown below:

![pancakes](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/927bu3puaq8cnheg4pxl.jpg)
As seen in the photo, the last pancake added to the pile will be the first to be removed.

- It is implemented in undo functionality in applications.
- In web browsing, the most recent site visited is always the first in the browsing history.

In the following section, we will look at some of the prerequisites for this tutorial.

# Prerequisites
The following are required to complete this tutorial:

- Node.js installed on your system.
- Sound knowledge of JavaScript.

In the following section, we will now implement stacks.

Now we will implement how a stack works in JavaScript. Here is an example of a stack in JavaScript using an array:
  
```JavaScript
// Stack class
class Stack {
  
    // Array is used to implement stack
    constructor()
    {
        this.items = [];
    }
  
    // Methods to be implemented
    // push(value)
    // pop()
    // peek()
    // isEmpty()
    // printStack()
}

```

As you can see in the preceding example, we created the body of a stack class, which includes a constructor in which we declare an array to implement the stack. As a result, when a stack class object is created, this constructor, as well as some methods for implementing adding and removing values, are automatically called.

###### Let Us Now Put Each Method Into Action:

1.**Push()** - This method is used to insert elements into an array.


![push](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/99gz2xotqpjf21xwg3qz.PNG)
This method adds a value to the array of items.

2.**Pop()** - This method is used to remove the array's top element.


![pop](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nn08p45c3b09mwnv1zse.PNG)

First, we check to see if the array has elements; if it doesn't, it will return underflow. The pop method will remove the element that was most recently added to the items array.

3.**peek** - When called, this method returns the array's topmost element. The final component to be added.

![peek](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/izc5ippz5p00h7momf7n.PNG)

As can be seen, it only returns the most recent value added to the stack, the topmost value, but it does not remove it..

4. **isEmpty** - In a scenario where we are removing a value from the stack, we use this method to check if the stack is empty and confirm if it is. So that the methods are not executed when the stack contains no values.


![empty](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o1ig5lskbe1olxe4z9ip.PNG)
It returns true when the stack is empty, as shown above.

5. **print()** - This is a useful method that returns all of the values in the stack.

```JavaScript

// print function
print()
{
    let string = "";
    for (let i = 0; i < this.items.length; i++)
        string += this.items[i] + " ";
    return string;

```

Now that we've defined the stack class and its methods, let's put them to the test. As an example, consider the following:

![print](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dl6if6c73eb38cf6pfy1.png)
 
Now that we've finished implementing and testing our functionality, you can experiment with other application approaches to better understand the stack concept.

Happy coding until my next article.






