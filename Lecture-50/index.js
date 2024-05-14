// compile time error

// Syntax error
//console.log(1;

// runtime error
// console.log(x);    // not defined  


// Error Handling
try{
    console.log("Inside try Block");
    console.log(x);
    console.log("Going to the catch block");
}
catch(e){
    console.log("Inside catch block");
    //console.log("The error is:",e);
}
 finally{
    console.log("I will run everytime as i am finally block");
 }


 // Let's create a custom error
//  try{
//     // refrence error
//     console.log(x);
//  }
//  catch(err){
//     throw new Error("Value should be declared first then should be print");
//  }

let errorcode = 100;
if(errorcode == 100){
    throw new Error("Invalid JSON");
}