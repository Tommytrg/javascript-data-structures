/*jshint esversion:6*/

queue = (n) => {
  obj = {
    size: n,
    elements: [],
    enqueue : item=>{
      if(obj.elements !== obj.size){
        obj.elements.reverse();
        obj.elements.push(item);
        obj.elements.reverse();
      }else{
        return 'Queue Overgflow';
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
      return obj.elements[obj.elements.length - 1];
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
