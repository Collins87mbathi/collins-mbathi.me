---
date: '2022-07-05T13:47:01.690Z'
title: Implementing Stacks in JavaScript
tagline: Implementing Stacks in JavaScript
preview: >-
  In today's article we are going to discuss about stack implementation in JavaScript. Stack is a linear data structure in which removing and adding of elements follows a unique order.
image: >-
  https://dev-to-uploads.s3.amazonaws.com/uploads/articles/smemzu357dz1z2vtxgfc.png
---
In today's article we are going to discuss about stack implementation in JavaScript. Stack is a linear data structure in which removing and adding of elements follows a unique order.
It follows first in Last out (FILO).As compared to queues, for queues it follows the order first in first out (FIFO);
In real life situation, we can say for example when you pile a lot of pancakes  together as shown below:

![pancakes](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/927bu3puaq8cnheg4pxl.jpg)
As seen in photo the last pancake to be placed in the pile, will be the first pancake to be taken out.
Stack in applications its implemented in undo functionality and also in web browsing , when one goes to history the last site to browse is always the first in the browsing history. 

Now we are going to implement how stack works in JavaScript 
here is the example of stack using array in JavaScript :
  
```javascript
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

As you can see the above example we have created  a body  of a stack class which contains a constructor in which we declare an array to implement stack. Hence, with the creation of an object of a stack class this constructor would be called automatically, and also some methods of implementing adding and removing of values.
###### Now lets implement each method:

1.**Push()** - This method is used to add elements in the array.


![push](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/99gz2xotqpjf21xwg3qz.PNG)
This method adds a value into the items array.

2.**Pop()** - This method is used to remove top element in the arrays.


![pop](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nn08p45c3b09mwnv1zse.PNG)

At first we check if the array has got elements, if its empty then its going to return underflow. The pop method is going to remove the element that was last to be added in the items array.

3.**peek** - This method when triggered it returns the top most element in the array. The last element to be added.



![peek](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/izc5ippz5p00h7momf7n.PNG)

As you can see it only returns the latest value to be added in the stack, the top most value but it does not remove it.

4. **isEmpty** - This method is used to check if the stack is empty in a scenario where we are removing a value from the stack, we confirm if its empty. So that we don't run the methods when the stack has no values.


![empty](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o1ig5lskbe1olxe4z9ip.PNG)
As we can see above, it returns true when the stack is empty. 

5. **print()** - This is a helping method where it returns all the values that are in the stack.

```javascript

// print function
print()
{
    let string = "";
    for (let i = 0; i < this.items.length; i++)
        string += this.items[i] + " ";
    return string;

```

Now we are done defining the stack class and its methods now lets test its few functions. We an example shown below:

![print](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dl6if6c73eb38cf6pfy1.png)
 
Now that we are done with implementing and testing our functionality, you can try to create other application ways
and you will understand the stack concept better.

See you in my next article happy coding .
