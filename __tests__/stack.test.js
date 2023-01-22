const createStack = require("../stack");

describe("stack", () => {
  it("createStack invoked returns an object", () => {
    const stack = createStack();
    expect(typeof stack).toBe("object");
  });
  it("should have a quantity property with an initial value of zero", () => {
    const stack = createStack();
    expect(stack.hasOwnProperty("quantity")).toBe(true);
    expect(stack.quantity).toBe(0);
  });
  it("should have a storage property which is initially set to an empty object", () => {
    const stack = createStack();
    expect(stack.hasOwnProperty('storage')).toBe(true);
    expect(stack.storage).toEqual({});
  });
  it("should have a maxSize property which defaults to five when no argument is passed", () => {
    const defaultStack = createStack();
    expect(defaultStack.maxSize).toBe(5);
  });
  it("should have the specified maxSize value", () => {
    const threeStack = createStack(3);
    expect(threeStack.maxSize).toBe(3);
  });
  describe("stack methods", () => {
    describe(".push", () => {
      it("should add items to the stack storage, and increase quantity", () => {
        //arrange
        const stack = createStack();
        //act
        stack.push("loofah");
        //assert
        expect(stack.storage).toEqual({ 1: "loofah" });
        expect(stack.quantity).toBe(1);
      });
      it("should add items with consecutive keys", () => {
        //arrange
        const stack = createStack(3);
        //act
        stack.push("loofah");
        stack.push("soap");
        stack.push("face wash");
        //assert
        expect(stack.storage).toEqual({
          1: "loofah",
          2: "soap",
          3: "face wash",
        });
      });
      it("should limit the number of items you can push according to maxSize property", () => {
        //arrange
        const stack = createStack(3);
        //act
        stack.push("loofah");
        stack.push("soap");
        stack.push("face wash");
        stack.push("toothbrush");
        //assert
        expect(stack.storage).toEqual({
          1: "loofah",
          2: "soap",
          3: "face wash",
        });
      });
    });
    describe(".pop", () => {
      it("should return the last item entered into storage when there are multiple items", () => {
        //arrange
        const stack = createStack(3);
        //act
        stack.push("fork");
        stack.push("saucepan");
        //assert
        expect(stack.pop()).toBe("saucepan");
      });
      it("should reduce quantity when item is popped off the stack", () => {
        //arrange
        const stack = createStack(3);
        //act
        stack.push("fork");
        stack.push("saucepan");
        //assert
        expect(stack.quantity).toBe(2);
        stack.pop();
        expect(stack.quantity).toBe(1);
      });
      it("should remove last item from storage", () => {
        //arrange
        const stack = createStack(3);
        //act
        stack.push("fork");
        stack.push("saucepan");
        //assert
        stack.pop();
        expect(stack.storage).toEqual({ 1: "fork" });
      });
    });
    describe("isEmpty", () => {
      test('should return true when stack is empty', () => {
        const stack = createStack(3)
        expect(stack.isEmpty()).toBe(true)
        expect(stack.quantity).toBe(0)
      })
      test('should return false when stack is not empty', () => {
        const stack = createStack(3);
        stack.push("egg")
        expect(stack.isEmpty()).toBe(false);
        expect(stack.quantity).toBe(1);
      })
    })  
    describe('isFull', () => {
      test('should return true when stack is full', () => {
        const stack = createStack(2)
        stack.push('fridge')
        stack.push('hedgehog')
        expect(stack.isFull()).toBe(true)
      })
      test('should return false when stack is not full', () => {
        const stack = createStack(3)
        expect(stack.isFull()).toBe(false)
      })
    })
    describe('peek', () => {
      test('should return the first item at the top of the stack', () => {
        const stack = createStack(3)
        stack.push('something')
        stack.push('very')
        stack.push('cool')
        expect(stack.peek()).toBe('cool')
      })
      test('should return undefined if stack is empty', () => {
        const stack = createStack()
        expect(stack.peek()).toBe(undefined)
      })
    })
  });
});
