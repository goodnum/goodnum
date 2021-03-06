'use strict'

var expect = require('chai').expect;
var formatNum = require('../index');

describe('formatNum', function() {
  it('should convert single digits', function() {
    var result = formatNum(1);
    expect(result).to.equal('1');
  });
  it('should convert double digits', function() {
    var result = formatNum(12);
    expect(result).to.equal('12');
  });
  it('should convert triple digits', function() {
    var result = formatNum(123);
    expect(result).to.equal('123');
  });
  it('should convert 4 digits', function() {
    var result = formatNum(1234);
    expect(result).to.equal('1,234');
  });
  it('should convert 5 digits', function() {
    var result = formatNum(12345);
    expect(result).to.equal('12,345');
  });
  it('should convert 6 digits', function() {
    var result = formatNum(123456);
    expect(result).to.equal('123,456');
  });
  it('should convert 7 digits', function() {
    var result = formatNum(1234567);
    expect(result).to.equal('1,234,567');
  });
  it('should convert 8 digits', function() {
    var result = formatNum(12345678);
    expect(result).to.equal('12,345,678');
  });
});
