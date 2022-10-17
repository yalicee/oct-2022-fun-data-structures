const createStack = require("../stack");

describe("stack", () => {
  it("createStack invoked returns an object", () => {
    // arrange
    const result = createStack();
    // act
    // assert
    expect(typeof result).toBe("object");
  });
  it("should have a quantity property with an initial value of zero", () => {
    //arrange
    const stack = createStack();
    //act
    const hasQuantity = stack.hasOwnProperty("quantity");
    //assert
    expect(hasQuantity).toBe(true);
    expect(stack.quantity).toBe(0);
  });
  it("should have a storage property which is initially set to an empty object", () => {
    //arrange
    const stack = createStack();

    //act
    const hasStorage = stack.hasOwnProperty("storage");
    //assert
    expect(hasStorage).toBe(true);
    expect(stack.storage).toEqual({});
  });
  it("should have a maxSize property which defaults to five when no argument is passed", () => {
    //arrange
    const defaultStack = createStack();
    //act
    const hasMaxSize = defaultStack.hasOwnProperty("maxSize");
    //assert
    expect(hasMaxSize).toBe(true);
    expect(defaultStack.maxSize).toBe(5);
  });
  it("should have the specified maxSize value", () => {
    //arrange
    const threeStack = createStack(3);
    //act
    //assert
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
    });
    describe(".pop", () => {
      it("should return the last item entered into storage", () => {
        //arrange
        const stack = createStack(3);
        //act
        stack.push("fork");
        //assert
        expect(stack.pop()).toBe("fork");
      });
      it("should return the last item entered into storage when there are multiple items", () => {
        //arrange
        const stack = createStack(3);
        //act
        stack.push("fork");
        stack.push("saucepan");
        //assert
        expect(stack.pop()).toBe("saucepan");
      });
      it("should reduce quantity when item is popped off stack", () => {
        //arrange
        const stack = createStack(3);
        //act
        stack.push("fork");
        stack.push("saucepan");
        //assert
        expect(stack.pop()).toBe("saucepan");
        expect(stack.quantity).toBe(1);
      });
      it("should remove last item from storage", () => {
        //arrange
        const stack = createStack(3);
        //act
        stack.push("fork");
        stack.push("saucepan");
        //assert
        expect(stack.pop()).toBe("saucepan");
        expect(stack.storage).toEqual({ 1: "fork" });
      });
      //   it("peek", () => {
      //     const stack = createStack(3);
      //     //act
      //     stack.push("fork");
      //     stack.push("saucepan");
      //     //assert
      //     console.log(stack.peek());
      //   });
    });
  });
});
