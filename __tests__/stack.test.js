const createStack = require("../stack");

describe("stack", () => {
  it("createStack invoked returns an object", () => {
    const result = createStack();
    expect(typeof result).toBe("object");
  });
  it("should have a quantity property with an initial value of zero", () => {
    const stack = createStack();
    const hasQuantity = stack.hasOwnProperty("quantity");
    expect(hasQuantity).toBe(true);
    expect(stack.quantity).toBe(0);
  });
  it("should have a storage property which is initially set to an empty object", () => {
    const stack = createStack();
    const hasStorage = stack.hasOwnProperty("storage");
    expect(hasStorage).toBe(true);
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
      it("should add items to the stack storage", () => {
        //arrange
        const stack = createStack();
        //act
        stack.push("loofah");
        //assert
        expect(stack.storage).toEqual({ 1: "loofah" });
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
      it("should increase stack.quantity", () => {
        //arrange
        const stack = createStack(3);
        //act
        stack.push("fork");
        stack.push("saucepan");
        //assert
        expect(stack.quantity).toBe(2);
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
    //isEmpty
    //isFull
    //peek
  });
});
