// // creating object using object constructor

// let person = new Object();

// // Access or retrieve
// console.log("before");

// console.log(person);

// // Add the data

// person.name = "Mani";
// person["@ge"] = 23;
// let address = "village";
// person[address] = "martur";
// console.log("After");

// console.log(person)
// // update the data
// console.log("before updating the data" , person);
// person.name = "kumar";
// console.log("After updating the data" , person);

// console.log("before deleting the data" , person);
// delete person["@ge"]
// console.log("After deleting the data" , person);

// noral way of accessing same keyName variables

let myName = "mani";
let age = 21;
let person = {
    myName : myName,
    age : age,
};

console.log(person);

// shorter property syntax

let village = "martur";
let person2 = {
    myName,
    age,
    village,
};

console.log(person2)

