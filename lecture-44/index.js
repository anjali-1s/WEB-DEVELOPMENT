// function definition
// function sayMyName(){
//    console.log("Anjali Singh");
// }

// // fucntion use - function call
// sayMyName();

// // function to print counting 
// function printCounting(){
//     for(let i = 1; i <= 10; i++){
//         console.log(i);
//     }
// }

// printCounting();

// // functions with parameters
// // sum of two numbers
// function sum(a,b){
//     console.log(a+b);
// }
// sum(2,3);

// // return functions
// function getAverage(a,b,c){
//     let avg = (a+b+c)/3;
//     return avg;
// }

// let ans = getAverage(2,3,4);
// console.log("Average of three number:"+ans);


// Another way to define function
// let getmultiplication = function(a,b){
//     return a*b;
// }

// console.log(getmultiplication(2,4));

// let squareNumber = function(num){
//     return num**2
// }

// console.log(squareNumber(7));

// Arrow functions
let getExp = (x,y) => {
    let ans = x ** y;
    return ans;
}

console.log(getExp(3,3));

let getMod = (x,y) => {
    return x%y;
}

console.log(getMod(3,2));