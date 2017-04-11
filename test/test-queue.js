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

  it('should return queue when enqueue', () => {
    let queue1 = queue(2);

    expect(queue1.enqueue(2)).to.equal([2]);
  });

  it('should return queue when enqueue', () => {
    let queue1 = queue(2);
    queue1.enqueue(1);
    queue1.enqueue(2);
    expect(queue1.enqueue(3)).to.equal([3,2,1]);
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
});
