function createStack(maxSize = 5) {
  // build your stack object inside this factory function
  const stack = {};
  stack.quantity = 0;
  stack.storage = {};
  stack.maxSize = maxSize;
  stack.push = push;
  stack.pop = pop;
  stack.peek = peek;

  function push(itemStr) {
    // this.quantity++;
    if (this.quantity < maxSize) {
      this.storage[++this.quantity] = itemStr;
    }
  }

  function pop() {
    const lastItem = this.storage[this.quantity];
    delete this.storage[this.quantity];
    this.quantity--;
    return lastItem;
  }

  function isEmpty() {
    return this.quantity === 0 ? true : false;
  }

  function isFull() {
    return this.quantity === this.maxSize ? true : false;
  }

  function peek() {
    const peekItem = this.storage[this.quantity];
    return peekItem;
  }

  return stack;
}

module.exports = createStack;
