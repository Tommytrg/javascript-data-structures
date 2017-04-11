/*jshint esversion:6*/
let stack = (n) => {
  let obj = {
      size: n,
      elements: [],
      push: (item) => {
          if (obj.elements.length < obj.size) {
              obj.elements.push(item);
          }
          if (obj.elements.length === obj.size) {
              return 'Stack Overflow';
          }
      },
      pop: () => {
          if (obj.size !== 0) {
              return n !== 0 ? obj.elements.pop() : 'Stack Underflow';
          }
      },
      isEmpty: () => {
          return obj.elements.length === 0;
      },
      isFull: () => {
          return obj.elements.length === obj.size ? true : false;
      }
    };
    return obj;
};

module.exports = stack;
