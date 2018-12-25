const assert = require('chai').assert;
const sayHello = require('../SERVER').sayHello;

describe('App', function (){
    it('app abc',function(){
        let result = sayHello();
        assert.equal(app(),'hello');
    });
});