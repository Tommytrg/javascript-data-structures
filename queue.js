/*jshint esversion:6*/

let queue = (n) => {
  let obj = {
    size: n,
    elements: [],
    enqueue: item => {
      if (obj.elements.length !== obj.size){
        obj.elements.reverse();
        obj.elements.push(item);
        obj.elements.reverse();
        return obj.elements;
      }else{
        return 'Queue Overflow';
      }
    },
    dequeue: () => {
      if(obj.elements.length !== 0){
        return obj.elements.pop();
      }else{
        return 'Queue Underflow';
      }
    },
    peek: () => {
      if(obj.elements.length === 0){
        return 'Queue Underflow';
      }else{
        return obj.elements[obj.elements.length - 1];
      }
    },
    isFull: () => {
      return obj.elements.length === obj.size;
    },
    isEmpty: () => {
      return obj.elements.length === 0;
    }
  };
  return obj;
};

module.exports = queue;
