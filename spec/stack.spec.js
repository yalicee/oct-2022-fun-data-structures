const createStack = require('../data-structures/stack.js');
const {expect} = require('chai');


describe('createStack',() => {
  it('has a quantity property which is set to 0',() => {
    const testStack = createStack();
    expect(testStack.quantity).to.equal(0);
  });
  it('has a storage property which is set to an empty object',() => {
    const testStack = createStack();
    expect(testStack.storage).to.eql({});
  });
});