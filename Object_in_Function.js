
// function mobileObject() {
//     let mobile = {
//     Brand : "Redmi",
//     series : "note 17 5g",
//     Ram : "12 gb ram",
// }

// console.log(mobile.Brand);
// console.log(mobile["series"]);
// console.log(mobile["Ram"]);

// }

// mobileObject();

// function mobileObject() {
//     let mobile = {
//     Brand : "Redmi",
//     series : "note 17 5g",
//     Ram : "12 gb ram",
// }
//   return mobile;

// }

// console.log(mobileObject())

// function mobileObject() {
//     return {
//     Brand : "Redmi",
//     series : "note 17 5g",
//     Ram : "12 gb ram",
// };

// }

// // console.log(mobileObject())

// let MyMobile = mobileObject();
// console.log(MyMobile.Brand)
// console.log(MyMobile.Ram)

// task 1 object in function with input and without return
// task 2 object in function with input and with return


// function inside an Object is called method

// let person = {
//     name : "mani",
//     Behaviour : function() {
//         console.log("im brave");
//     },
// };

// person.Behaviour()

// let person = {
//     name : "mani",
//     Behaviour : () => {
//         console.log("im brave");
//     },
// };

// person.Behaviour()

// let person = {
//     name : "mani",
//     Behaviour : function name() {
//         console.log("im brave");
//     },
// };

// person.Behaviour()

let person = {
    name : "mani",
    "Behaviour" : () => {
        console.log("im brave");
    },
};

person["Behaviour"]()