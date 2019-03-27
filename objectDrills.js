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
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.bang = 'bang';
    return obj;
}

function personMaker() {
    var person = {
        firstName: 'Paul',
        lastName: 'Jones',
        // replace `null` with a function that uses self reference to return
        // full name
        fullName: function () {
            return `${this.firstName}` + ' ' + `${this.lastName}`;
        }
    };
    return person;
}

const sampleObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
};

function keyDeleter(obj) {
    delete sampleObj.foo;
    delete sampleObj.bar;
    return sampleObj;
}

function makeStudentsReport(data) {
    const reportArray = [];
    for (let i = 0; i < data.length; i++) {
        reportArray.push(`${data[i].name}` + ': ' + `${data[i].grade}`)
    }
    return reportArray;
}

function enrollInSummerSchool(students) {
    return updatedArray = students.map(students => {
        return {
            name: students.name,
            status: 'In Summer school',
            course: students.course,
        };
    });
}


function findById(items, idNum) {
    for (let i = 0; i < items.length; i++)
        if (idNum === items[i].id) {
            return items[i];
        }
}

function validateKeys(object, expectedKeys) {
    if (Object.keys(object).length !== expectedKeys.length) {
        return false
    }
    for (let i = 0; i < expectedKeys.length; i++)
        if (Object.keys(object)[i] !== expectedKeys[i]) {
            return false
        }
        else {
            return true
        }

}

