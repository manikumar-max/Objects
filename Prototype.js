// var person = {
//     name : "hero",
//     age : 21,
// };

// var abc = {
//     name : "ABC",
//     talk : () => {
//         console.log(" I am TAlk method from abc");
//     },
// };

// abc.talk();
// // syntax : prototype
// // ObjectName._ _proto_ _ = Prototype(objectName)
// person.__proto__ = abc;
// console.log(person);
// // abc object is a prototype of person
// person.talk();


// prototypal chaining ================================
// var person = {
//     name : "hero",
//     age : 21,
// };

// var abc = {
//     name : "ABC",
//     talk : () => {
//         console.log(" I am TAlk method from abc");
//     },
// };

// abc.talk();
// // syntax : prototype
// // ObjectName._ _proto_ _ = Prototype(objectName)
// person.__proto__ = abc;
// console.log(person);
// // abc object is a prototype of person
// person.talk();

// var xyz = {
//     walk : () => {
//         console.log("i am walk from xyz")
//     },
// };

// // making xyz as the prototype of abc
// abc.__proto__ = xyz;
// console.log(person);
// person.talk();
// person.walk();
// abc.walk();

// console.log("=========================================================================================");
var person = {
    name : "hero",
    age : 21,
    walk : () => {
        console.log("i am walk method from person")
    }
};

var abc = {
    name : "ABC",
    talk : () => {
        console.log(" I am TAlk method from abc");
    },
};

var xyz = {
    walk : () => {
        console.log("i am walk from xyz")
    },
};

abc.talk();

// making abc as prototypr of person
// syntax : prototype
// ObjectName._ _proto_ _ = Prototype(objectName)
person.__proto__ = abc;
console.log(person);
// abc object is a prototype of person
person.talk();

// making xyz as the prototype of abc
abc.__proto__ = xyz;
console.log(person);
person.talk();
abc.walk();
person.walk();
    