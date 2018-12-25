const assert = require('chai').assert;
const sayHello1 = require('../public/test_test').sayHello1;

describe('App', function (){
    it('app abc',function(){
        let result = sayHello1();
        assert.equal(result,'hello');
    });
    it('app abc',function(){
        let result = sayHello1();
        assert.equal(result,'hello');
    });
});