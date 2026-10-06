
// let gender = "male";
// let person = {
//     "my Name" : "hero",
//     "my @ge" : 25,
//     "mySalary":98000.00,
//     gender : "male"
// }

// // accessing the data using the [] notation

// console.log(person["my Name"])
// console.log(person["my @ge"])
// console.log(person["gender"])

// dynamic variable


let person = {
    "my Name" : "hero",
    "my @ge" : 25,
    "mySalary":98000.00,
    gender : "male"
}
let myGender = "gender"; //storing propertyName in a global variable

// accessing the data using the [] notation

// console.log(person["my Name"])
// console.log(person["my @ge"])
// console.log(person["gender"])
// console.log(person[myGender])
// console.log(person.price)// this will not work because u know

// crud operations on objects using [] as notation

let laptop = {
    "company name" : "mac book",
    "R@m storage" : "12 GB Ram",
    "ssd" : "1 TB"
}
let storage = "ssd"

console.log("before updating and adding" , laptop)
console.log(laptop["company name"])
console.log(laptop["R@m storage"])
console.log(laptop[storage])

// updating and adding new key, value pairs to the object using [ ] notation

laptop["company name"] = "Dell";
laptop["R@m storage"] = "15 GB Ram";
laptop[storage] = "2 TB";


console.log("after updating and adding" , laptop)
console.log(laptop["company name"])
console.log(laptop["R@m storage"])
console.log(laptop[storage])

// deleting some key value pairs

let details = {
    "First Name" : "Mani",
    "Second Name" : "Kumar",
    "Initial N@me" : "Pentela",
    "Vi!!age Name" : "Martur"
}

console.log("before deleting the key,pair Values" , details)
delete details["First Name"]
delete details["Initial N@me"]
console.log("After deleting the key,pair values" , details)



