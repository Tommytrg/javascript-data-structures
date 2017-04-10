/*jshint esversion:6*/
const expect = require('chai').expect;
const stack = require('../stack');

describe('Stack', () => {
  it('should return size 1', () => {
    let result = stack(1);
    expect(result.size).to.equal(1);
  });

  it('should return size 5', () => {
    let result = stack(5);
    expect(result.size).to.equal(5);
  });

  it('should return size 10', () => {
    let result = stack(10);
    expect(result.size).to.equal(10);
  });

  it('should return isEmpty true', () => {
    let stck = stack(0);
    let result = stck.isEmpty();
    expect(result).to.equal(true);
  });

  it('should return isEmpty false', () => {
    let stck = stack(3);
    stck.push(1);
    let result = stck.isEmpty();
    expect(result).to.equal(false);
  });

  it('should return isFull false', () => {
    let stck = stack(3);
    stck.push(1);
    let result = stck.isFull();
    expect(result).to.equal(false);
  });
  it('should return isFull true', () => {
    let stck = stack(1);
    stck.push(1);
    let result = stck.isFull();
    expect(result).to.equal(true);
  });
});
