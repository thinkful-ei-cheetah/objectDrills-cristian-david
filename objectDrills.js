// function createMyObject() {
//     return {
//         foo: 'bar',
//         answerToUniverse: 42,
//         'olly olly': 'oxen free',
//         sayHello: function () {
//             return 'hello';
//         },
//     }
// }

// function updateObject(obj) {
//     obj.foo = 'foo';
//     obj.bar = 'bar';
//     obj.bizz = 'bizz';
//     obj.bang = 'bang';
//     return obj;
// }

// function personMaker() {
//     var person = {
//         firstName: 'Paul',
//         lastName: 'Jones',
//         // replace `null` with a function that uses self reference to return
//         // full name
//         fullName: function () {
//             return `${this.firstName}` + ' ' + `${this.lastName}`;
//         }
//     };
//     return person;
// }

// const sampleObj = {
//     foo: 'foo',
//     bar: 'bar',
//     bizz: 'bizz',
//     bang: 'bang',
// };

// function keyDeleter(obj) {
//     delete sampleObj.foo;
//     delete sampleObj.bar;
//     return sampleObj;
// }

// function makeStudentsReport(data) {
//     const reportArray = [];
//     for (let i = 0; i < data.length; i++) {
//         reportArray.push(`${data[i].name}` + ': ' + `${data[i].grade}`)
//     }
//     return reportArray;
// }

// function enrollInSummerSchool(students) {
//     return updatedArray = students.map(students => {
//         return {
//             name: students.name,
//             status: 'In Summer school',
//             course: students.course,
//         };
//     });
// }


// function findById(items, idNum) {
//     for (let i = 0; i < items.length; i++)
//         if (idNum === items[i].id) {
//             return items[i];
//         }
// }

// function validateKeys(object, expectedKeys) {
//     if (Object.keys(object).length !== expectedKeys.length) {
//         return false
//     }
//     for (let i = 0; i < expectedKeys.length; i++)
//         if (Object.keys(object)[i] !== expectedKeys[i]) {
//             return false
//         }
//         else {
//             return true
//         }

// }

// const loaf = {flour: 300, water: 210}; 

// console.log(loaf.flour);
// console.log(loaf.water);

// loaf.hydration = function(x , y) {
//     return (this.water / this.flour * 100)
// }

// console.log(loaf.hydration());


// const obj = {foo: 2, bar: 3, fum: 15, quux: 7, spam: 18};

// for (var property in obj) {
//     console.log(`${property}: ${obj[property]}`);
// }


// const obj = { meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']};

// console.log(obj.meals[3]);


// const obj1 = { name: 'greg', job: 'janitor' };
// const obj2 = { name: 'steve', job: 'cook' };
// const obj3 = { name: 'mandy', job: 'cashier' };

// const array1 = [obj1, obj2, obj3];

// // for (let i = 0; i < array1.length; i++) {
// //     console.log(array1[i].name + ": " + array1[i].job)
// // }

// obj1.boss = 'steve';
// obj2.boss = 'mandy';

//  for (let i = 0; i <array1.length; i++) {
//     if (!array1[i].boss) {
//         console.log(`${array1[i].job} ${array1[i].name} doesn't report to anybody.`)
//     }
//     else { 
//      console.log(`${array1[i].job} ${array1[i].name} reports to ${array1[i].boss}.`)
//      }
//     }


// function decode(word) {
//     const cipher = {a: 1, b: 2, c: 3, d: 4};
//     const firstCharacter = word[0];
//     const position = cipher[firstCharacter];
//    if (position === undefined) {
//        return " "
//     }
//     else {
//         return word[position]; 
//     }
// }


// function decodeWords(sentence) {
//     return sentence.split(" ")
//     .map(phrase => decode(phrase))
//     .join("")
// }

// console.log(decodeWords('craft block argon meter bells brown croon droop'));

function createCharacter (name, nickname, race, origin, attack, defense) {
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defense,
        describe: function() {
            console.log(`${name} is a ${race} from ${origin}`)
        },
        evaluateFight: function(enemy) {
            let given = 0;
            let taken = 0;
            if (this.defense < enemy.attack) {
                taken = enemy.attack - this.defense;
            }
            if (enemy.defense < this.attack) {
                given = this.attack - enemy.defense;
            }
            console.log(`Your opponent takes ${given} damage and you receive ${taken} damage`);
        }
    }
}

const characters = [createCharacter('a', 'a', 'a', 'a', 10, 6), createCharacter('b', 'b', 'b', 'b', 2, 1), createCharacter('c', 'c', 'b', 'c', 3, 2), createCharacter('d', 'd', 'd', 'd', 6, 8), createCharacter('e', 'e', 'e', 'e', 8, 5)];
characters.push(createCharacter('f', 'f', 'f', 'f', 90, 9));
// console.log(characters)
// console.log(characters[3].evaluateFight(characters[2]))
// console.log(characters.filter(item => item.race === 'b' ))
console.log(characters.filter(item => item.attack > 5))
