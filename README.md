## Data Structures with the functional pattern

In this 1 day sprint you will be implementing 2 data structures that are commonly used in computer science: stacks and queues. You have already learned about one use of stacks: for keeping track of a pile of functions that are in the process of execution. A queue data structure would be useful on occasions where you want to process tasks in the same order as they arrive, such as in a messaging application or a printer queue.

# Core Goals

### Learning objectives

- Fully understand the functional pattern of object creation in JavaScript,           together with its pros and cons. 
- Learn, throughout the sprint, about the 4 rules of `this` in JavaScript.
- Introduce yourself to data structures.

## Stacks

1.  Implement a `createStack` factory function. 
An instance of `createStack` should have the following:

* It should have a quantity property which is set to 0.
```js
const testStack = createStack();
testStack.quantity  // 0
```

* It should have a storage property, which is set to an empty object.

```js
const testStack = createStack();
testStack.storage // {}
```

* It should have an isEmpty property, which is a boolean, initially set to true.
```js
const testStack = createStack();
testStack.isEmpty // true;

```

* It should have a `push` method, which can add items to the stack storage.
```js 
const testStack = createStack();
testStack.push('apple');
testStack.storage // { 1 : 'apple' }
testStack.push('orange');
testStack.storage // { 1 : 'apple', 2 : 'orange' } 
```

* It should have a `pop` method, which can remove items from the stack storage.  It will also return the last item removed from the stack storage.
```js
const testStack = createStack();
testStack.push('apple');
testStack.push('orange');
testStack.push('banana');
testStack.pop() // returns 'banana'
testStack.storage // {1 : 'apple', 2 : 'orange' }
```


* It should have a `peek` method that will show the item at the top of the stack storage.

```js
const testStack = createStack();
testStack.push('apple');
testStack.push('orange');
testStack.push('banana');
testStack.push('kiwi');
testStack.push('pear');
testStack.peek() // returns 'pear'
```

## Queues

2.  Implement a `createQueue` factory function that returns a queue instance.  The `createQueue` function will take a single argument representing the limit of the number of items in the queue.  E.g. 

```js 

const testQueue = createQueue(5);
// the new queue instance is allowed up to 5 items in the queue storage
```

An instance of `createQueue` should have the following:

* It should have `front` and `back` properties.  These are both numbers that represent the position of the front and back of the queue.  You can use these properties to add and remove items from the queue at the correct position.

* It should have an `enQueue` method that adds items to the **back** of the queue.  Items can only be added if the queue isn't full of course.

* It should have an `deQueue` method that removes items from the **front** of the queue.

* It should have a `getSize` method that returns the number of items in the queue.

* It should have an `isFull` method that will return a boolean indicating if the queue is full or not.

**NOTE** Implement each data structure in its own file with its own test file.

#### Important!

You may **not** use JavaScript arrays or any array methods or properties to implement your stack and queue structures. Everything should be implemented with objects and custom methods.

# Advanced - only attempt these if you get through stacks and queues!

* For the advanced section you will have to do some research of your own for information about each data structure.

1) Implement the set data structure. [Sets](https://en.wikipedia.org/wiki/Set_(abstract_data_type)) have lots of potential methods you could implement so pick out a few that seem most useful/interesting and implement those.

2) Implement the tree data structure. [Trees] (https://en.wikipedia.org/wiki/Tree_(data_structure)) also have a lot of methods, many of which may come into tomorrow's sprint. Focus today on implementing methods that add and remove data (e.g. addData, removeData) or return a boolean, (e.g. isParent, isRoot, hasSiblings, isLeaf). Look through the article for ideas on the terminology to use.

3) If you finish this, have a look for other potential data structures and see if you can implement useful functions they may have.