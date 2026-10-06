//  creation of the object
// let person = {
//     myName : "hero",
//     myAge : 25,
//     mySalary:98000.00
// }

// retrieve (or) read the data from the object
// console.log(person);

// By using dot notation retrieving the data from the object
// syntax objectName.propertyName

// console.log(person);
// console.log("person name" ,person.myName)

// console.log("before updating the value" , person.myAge)
// // updating the data in the object
// // syntax => objectName.propertyage = objectName.propertyage+1

// person.myAge = person.myAge+1
// console.log("after updating" , person.myAge)
// console.log(person)

//  updating or adding new propertyName and value (or) "property" to the object
// console.log("before adding" , person);
// // adding
// person.gender = "male"
// person.height = 5.8
// console.log("after adding" ,person)

// deleting the data from the object
// console.log("before deleting the data" , person);
// // deletion
// delete person.myAge
// console.log("after deleting the data" , person);

// let gender = "male";
// let person = {
//     "my Name" : "hero",
//     "my @ge" : 25,
//     "mySalary":98000.00,
//     gender : "male"
// }

// accessing the data using the [] notation

console.log(person["my Name"])
console.log(person["my @ge"])
console.log(person["gender"])

// dynamic variable


let person = {
    "my Name" : "hero",
    "my @ge" : 25,
    "mySalary":98000.00,
    gender : "male"
}
let myGender = "gender"; //storing propertyName in a global variable

// accessing the data using the [] notation

console.log(person["my Name"])
console.log(person["my @ge"])
console.log(person["gender"])
console.log(person[myGender])
// console.log(person.price)// this will not work because u know

// crud operations on objects using [] as notation


// nested objects

// let person = {
//     name : "mani",
//     address : {
//         village: "martur",
//         district : "prakasam",
//         state : "a.p"
//     }
// };

// console.log(person);
// console.log(person.address);
// console.log(person.address.district);
// console.log(person.address.state);
// console.log(person.address.village)

// let person = {
//     name : "mani",
//     address : {
//         village: "martur",
//         district : "prakasam",
//         state : "a.p"
//     }
// };
// updating the nested objects

// console.log("Before" , person)
// person.name = "kumar";
// person.address.district = "guntur";
// person.address.state = "andhra pradesh";
// person.address.village = "dronadula"
// person.address.pincode = 522301
// console.log("after updating" , person)

// delete person.name
// console.log(person)
