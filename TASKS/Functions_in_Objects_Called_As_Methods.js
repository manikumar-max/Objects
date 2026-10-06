// Named Functions in objects without input and without return.
// let totalColors = "colors"

// let smartphone = {
//         brand: "Samsung",                 
//         model: "S24 Ultra",              
//         storageGB: 254,                  
//         is5GEnabled: true,               
//         colors: `"Black", "Blue", "Gold"`,
//         Description : function mobileDescription(){
//            console.log( "It is powered by the Snapdragon 8 Gen 3 processor, has a 200MP quad camera system, and includes a built-in S Pen.");
//         }
//     }

// smartphone.Description();
// smartphone["Description"]();

// Named Functions in Objects with input and without return.

// let totalColors = "colors"

// let smartphone = {
//         brand: "Samsung",                 
//         model: "S24 Ultra",              
//         storageGB: 254,                  
//         is5GEnabled: true,               
//         colors: `"Black", "Blue", "Gold"`,
//         Description : function mobileDescription(descri){
//            console.log(descri);
//         }
//     }

// console.log(smartphone[totalColors]);
// smartphone.Description("It is powered by the Snapdragon 8 Gen 3 processor, has a 200MP quad camera system, and includes a built-in S Pen.");
// smartphone["Description"]("It is powered by the Snapdragon 8 Gen 3 processor, has a 200MP quad camera system, and includes a built-in S Pen.");

// Named Functions in objects without input and with return.
// let totalColors = "colors"

// let smartphone = {
//         brand: "Samsung",                 
//         model: "S24 Ultra",              
//         storageGB: 254,                  
//         is5GEnabled: true,               
//         colors: `"Black", "Blue", "Gold"`,
//         Description : function mobileDescription(){
//            return( "It is powered by the Snapdragon 8 Gen 3 processor, has a 200MP quad camera system, and includes a built-in S Pen.");
//         }
//     }

// console.log(smartphone[totalColors])
// console.log(smartphone.Description());
// console.log(smartphone["Description"]());

// Named Functions in objects with input and with return.
// let totalColors = "colors"

// let smartphone = {
//         brand: "Samsung",                 
//         model: "S24 Ultra",              
//         storageGB: 254,                  
//         is5GEnabled: true,               
//         colors: `"Black", "Blue", "Gold"`,
//         Description : function mobileDescription(descri){
//            return(descri);
//         }
//     }

// console.log(smartphone[totalColors])
// console.log(smartphone.Description("It is powered by the Snapdragon 8 Gen 3 processor, has a 200MP quad camera system, and includes a built-in S Pen."));
// console.log(smartphone["Description"]("It is powered by the Snapdragon 8 Gen 3 processor, has a 200MP quad camera system, and includes a built-in S Pen."));

// ================================================================================================================================================================================

// Anonymous Functions in objects without input and without return.
// let totalColors = "colors"

// let smartphone = {
//         brand: "Samsung",                 
//         model: "S24 Ultra",              
//         storageGB: 254,                  
//         is5GEnabled: true,               
//         colors: `"Black", "Blue", "Gold"`,
//         Description : function(){
//            console.log( "It is powered by the Snapdragon 8 Gen 3 processor, has a 200MP quad camera system, and includes a built-in S Pen.");
//         }
//     }

// smartphone.Description();
// smartphone["Description"]();

// Anonymous Functions in Objects with input and without return.

// let totalColors = "colors"

// let smartphone = {
//         brand: "Samsung",                 
//         model: "S24 Ultra",              
//         storageGB: 254,                  
//         is5GEnabled: true,               
//         colors: `"Black", "Blue", "Gold"`,
//         Description : function(descri) {
//            console.log(descri);
//         }
//     }

// console.log(smartphone[totalColors]);
// smartphone.Description("It is powered by the Snapdragon 8 Gen 3 processor, has a 200MP quad camera system, and includes a built-in S Pen.");
// smartphone["Description"]("It is powered by the Snapdragon 8 Gen 3 processor, has a 200MP quad camera system, and includes a built-in S Pen.");

// Anonymous Functions in objects without input and with return.
// let totalColors = "colors"

// let smartphone = {
//         brand: "Samsung",                 
//         model: "S24 Ultra",              
//         storageGB: 254,                  
//         is5GEnabled: true,               
//         colors: `"Black", "Blue", "Gold"`,
//         Description : function() {
//            return( "It is powered by the Snapdragon 8 Gen 3 processor, has a 200MP quad camera system, and includes a built-in S Pen.");
//         }
//     }

// console.log(smartphone[totalColors])
// console.log(smartphone.Description());
// console.log(smartphone["Description"]());

// Anonymous Functions in objects with input and with return.
// let totalColors = "colors"

// let smartphone = {
//         brand: "Samsung",                 
//         model: "S24 Ultra",              
//         storageGB: 254,                  
//         is5GEnabled: true,               
//         colors: `"Black", "Blue", "Gold"`,
//         Description : function(descri) {
//            return(descri);
//         }
//     }

// console.log(smartphone[totalColors])
// console.log(smartphone.Description("It is powered by the Snapdragon 8 Gen 3 processor, has a 200MP quad camera system, and includes a built-in S Pen."));
// console.log(smartphone["Description"]("It is powered by the Snapdragon 8 Gen 3 processor, has a 200MP quad camera system, and includes a built-in S Pen."));

// ======================================================================================================================================================================


// Arrow Functions in objects without input and without return.
// let totalColors = "colors"

// let smartphone = {
//         brand: "Samsung",                 
//         model: "S24 Ultra",              
//         storageGB: 254,                  
//         is5GEnabled: true,               
//         colors: `"Black", "Blue", "Gold"`,
//         Description : () => {
//            console.log( "It is powered by the Snapdragon 8 Gen 3 processor, has a 200MP quad camera system, and includes a built-in S Pen.");
//         }
//     }

// smartphone.Description();
// smartphone["Description"]();

// Arrow Functions in Objects with input and without return.

// let totalColors = "colors"

// let smartphone = {
//         brand: "Samsung",                 
//         model: "S24 Ultra",              
//         storageGB: 254,                  
//         is5GEnabled: true,               
//         colors: `"Black", "Blue", "Gold"`,
//         Description : (descri) => {
//            console.log(descri);
//         }
//     }

// console.log(smartphone[totalColors]);
// smartphone.Description("It is powered by the Snapdragon 8 Gen 3 processor, has a 200MP quad camera system, and includes a built-in S Pen.");
// smartphone["Description"]("It is powered by the Snapdragon 8 Gen 3 processor, has a 200MP quad camera system, and includes a built-in S Pen.");

// Arrow Functions in objects without input and with return.
// let totalColors = "colors"

// let smartphone = {
//         brand: "Samsung",                 
//         model: "S24 Ultra",              
//         storageGB: 254,                  
//         is5GEnabled: true,               
//         colors: `"Black", "Blue", "Gold"`,
//         Description : () => {
//            return( "It is powered by the Snapdragon 8 Gen 3 processor, has a 200MP quad camera system, and includes a built-in S Pen.");
//         }
//     }

// console.log(smartphone[totalColors])
// console.log(smartphone.Description());
// console.log(smartphone["Description"]());

// Arrow Functions in objects with input and with return.
let totalColors = "colors"

let smartphone = {
        brand: "Samsung",                 
        model: "S24 Ultra",              
        storageGB: 254,                  
        is5GEnabled: true,               
        colors: `"Black", "Blue", "Gold"`,
        Description : (descri) => {
           return(descri);
        }
    }

console.log(smartphone[totalColors])
console.log(smartphone.Description("It is powered by the Snapdragon 8 Gen 3 processor, has a 200MP quad camera system, and includes a built-in S Pen."));
console.log(smartphone["Description"]("It is powered by the Snapdragon 8 Gen 3 processor, has a 200MP quad camera system, and includes a built-in S Pen."));