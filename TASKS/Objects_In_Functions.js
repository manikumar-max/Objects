
// object in a function with (obj) as an argument and with out return
// function mobileObject1(mobile) {
//     console.log("before updating and adding and Delete ",mobile);
//     // // Accessing (or) retrieving the productName 
//     // console.log("Retrieving the products")
//     // console.log(mobile.brand);
//     // console.log(mobile.model);
//     // console.log(mobile["storageGB"])
//     // console.log(mobile["is 5G Enabled ?"])
//     // console.log(mobile[totalColors])

//     // adding and updating the new products and productValues to the object in the function.
//     // mobile.model = "17 Pro Max";
//     // mobile.storageGB = "1000 GB";
//     // mobile.Ram = "20 GB";
//     // console.log("after adding and updating ", mobile);
    
//     // deleting the products
//     delete mobile.brand
//     console.log("after deleting the product ", mobile)

// }

let totalColors = "colors"
// sending Object as an argument with out taking a variable
// mobileObject1({
//         brand: "Apple",                 
//         model: "iPhone 15",              
//         storageGB: 128,                  
//         "is 5G Enabled ?": true,               
//         colors: `"Black", "Blue", "Gold"`
//     })

// sending object as an argument with the help of a variable
let smartphone = {
        brand: "Samsung",                 
        model: "S24 Ultra",              
        storageGB: 254,                  
        is5GEnabled: true,               
        colors: `"Black", "Blue", "Gold"`
    }
// mobileObject1(smartphone)

// object in a function with (obj) as an argument and with return.

function mobileObject(mobile) {
    // return mobile
    // return [mobile.brand,
    //     mobile[totalColors]
    // ]
    // adding and updating
    // mobile.brand = "apple";
    // return mobile
    
    // deleting product
    delete mobile.brand
    return  mobile
}

console.log(mobileObject(smartphone));