/*jshint esversion:6*/
const expect = require('chai').expect;
const queue = require('../queue');

describe('Queue', () => {
  it('should return size 0', () => {
    let queue1 = queue(0);
    expect(queue1.size).to.equal(0);
  });

  it('should return size 1', () => {
    let queue1 = queue(1);
    expect(queue1.size).to.equal(1);
  });

  it('should return size 2', () => {
    let queue1 = queue(2);
    expect(queue1.size).to.equal(2);
  });
//fail
  it('should return queue when enqueue', () => {
    let queue1 = queue(2);

    expect(queue1.enqueue(2)).to.equal([2]);
  });
//fail
  it('should return queue when enqueue', () => {
    let queue1 = queue(2);
    queue1.enqueue(1);
    queue1.enqueue(2);
    let result = queue1.enqueue(3);
    expect(result).to.equal([3,2,1]);
  });

  it('should return Queue Overflow when is full', () => {
    let queue1 = queue(2);
    queue1.enqueue(1);
    queue1.enqueue(2);
    expect(queue1.enqueue(3)).to.equal('Queue Overflow');
  });

  it('should return element when dequeue', () => {
    let queue1 = queue(2);
    queue1.enqueue(1);
    expect(queue1.dequeue()).to.equal(1);
  });

  it('should return element when dequeue', () => {
    let queue1 = queue(2);
    queue1.enqueue(1);
    queue1.enqueue(2);
    expect(queue1.dequeue()).to.equal(1);
  });

  it('should return Queue Underflow when size is 0', () => {
    let queue1 = queue(2);
    expect(queue1.dequeue()).to.equal('Queue Underflow');
  });

  it('should return Queue Underflow when peek and is empty', () => {
    let queue1 = queue(2);
    expect(queue1.peek()).to.equal('Queue Underflow');
  });

  it('should return last element when peek', () => {
    let queue1 = queue(2);
    queue1.enqueue(1);
    queue1.enqueue(2);
    expect(queue1.dequeue()).to.equal(1);
  });

  it('should return isEmpty true', () => {
    let queue1 = queue(2);
    expect(queue1.isEmpty()).to.equal(true);
  });

  it('should return isEmpty false', () => {
    let queue1 = queue(2);
    queue1.enqueue(1);
    expect(queue1.isEmpty()).to.equal(false);
  });

  it('should return isFull false', () => {
    let queue1 = queue(2);
    queue1.enqueue(1);
    expect(queue1.isFull()).to.equal(false);
  });

  it('should return isFull true', () => {
    let queue1 = queue(1);
    queue1.enqueue(1);
    expect(queue1.isFull()).to.equal(true);
  });
});
