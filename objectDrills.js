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

const loaf = {flour: 300, water: 210}; 

console.log(loaf.flour);
console.log(loaf.water);

loaf.hydration = function(x , y) {
    return (this.water / this.flour * 100)
}

console.log(loaf.hydration());


const obj = {foo: 2, bar: 3, fum: 15, quux: 7, spam: 18};

for (var property in obj) {
    console.log(`${property}: ${obj[property]}`);
}


const obj = { meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']};

console.log(obj.meals[3]);


const obj1 = { name: 'greg', job: 'janitor' };
const obj2 = { name: 'steve', job: 'cook' };
const obj3 = { name: 'mandy', job: 'cashier' };

const array1 = [obj1, obj2, obj3];

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i].name + ": " + array1[i].job)
}