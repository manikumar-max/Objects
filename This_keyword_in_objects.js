// let person = {
//     name : "mani",
//     age : 23,
//     displayDetails : function () {
//         console.log("my name",person.name)
//         console.log("my age",person.age)
//     },
// };

// person.displayDetails();

// using this keyword and using named function and anonymous function

// let person = {
//     name : "mani",
//     age : 23,
//     displayDetails : function () {
//         console.log("my name",this.name)
//         console.log("my age",person.age)
//     },
// };

// person.displayDetails();

// ================================
// let person = {
//     name : "mani",
//     age : 23,
//     displayDetails : function Details() {
//         console.log("my name",this.name)
//         console.log("my age",this.age)
//     },
// };

// person.displayDetails();

// using arrow function
// let person = {
//     name : "mani",
//     age : 23,
//     displayDetails : () => {
//         console.log("my name",this.name)
//         console.log("my age",person.age)
//     },
// };

// person.displayDetails();

// ===================================
// let person = {
//     name : "mani",
//     age : 23,
//     displayDetails : function Details() {
//         console.log(this);
//     },
// };

// person.displayDetails()

// function abc() {
//     console.log(this);
// }
// abc();

let person = {
    name : "mani",
    age : 23,
    displayDetails : () =>{
        console.log(this);
    },
};

person.displayDetails()

let abc = () => {
    console.log(this);
}
abc();

