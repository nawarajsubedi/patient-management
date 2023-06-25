import "jest-canvas-mock";
// Mock the getContext method of HTMLCanvasElement

Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
  value: () => {
    // Mock any required methods or properties here
    return null;
  },
});
