function createMyObject() {
    return {
        foo: 'bar',
        answerToUniverse: 42,
        'olly olly': 'oxen free',
        sayHello: function () {
            return 'hello';
        },
    }
}

function updateObject(obj) {
    obj.foo= 'foo';
    obj.bar= 'bar';
    obj.bizz= 'biz';
    obj.bang= 'bang';
    return obj;
}
