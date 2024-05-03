let obj = {
    name:"Anjali",
    age:21,
    weight:55,
    height:"5ft 7inch",

    greet: function(){
        console.log("Hello jee kaise ho sare?")
    }
};

// console.log(obj);
// obj.greet();


// let obj2 = obj;


// creation of array
// let arr = [1,2,3,4,5];
// console.log(arr);

// let arr2 = new Array('Anjali',1,"Singh");
// console.log(arr2);
// console.log(typeof(arr2));

// arr2.push("Anjali Singh");  // enter value to the right
// console.log(arr2[3]);
// console.log(arr2.pop());     // remove value from the right

// arr2.shift();                   // to remove the value from the left
// arr2.unshift("Love Babbar");    // to add the value from the left
// console.log(arr2);

// arr2.push(20);
// arr2.push(40);
// arr2.push(30);
// console.log(arr2.slice(2,4));    // second part that is 4 is excluding

// console.log(arr2);
// arr2.splice(1,2,"kunal");    // to add remove replace values
// console.log(arr2);

// let arr = [10,20,30,40];

// let ansArray = arr.map((number) => {
//     return number*number;
// })
// console.log(ansArray);

// arr.map((number,index) => {
//     //console.log(number+1);
//     console.log(number);
//     console.log(index);
// })

// let arr = [10,20,30,11,21,44,51];

// let evenArray = arr.filter((number) => {
//     // if(number%2 === 0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
//     return number%2 === 0;
// })

// console.log(evenArray);

// let arr = [1,2,'love','kunal',null];
// let ans = arr.filter((value) => {
//     if(typeof(value) === 'string'){
//         return true;
//     }
//     else{
//         false;
//     }
// })

// console.log(ans);

// let arr = [10,20,30,40];

// let ans = arr.reduce((acc,curr) => {
//     return acc+curr;
// },0)

// console.log(ans);

// let arr = [9,1,7,4,2,8];
// arr.sort();
// console.log(arr);
// console.log(arr.reverse());

// console.log(arr.indexOf(9));

// let found = arr.find((element) => {
//         return element > 3;
// })

// // it searches for the desired result and return it when first value found
// console.log(found);


// let arr = [10,20,30];
// arr.forEach((value,index) => {
//     console.log("Number:",value,"Index:",index);
// })

// let length = arr.length;
// console.log("length:",length);

// for(let key in obj){
//     console.log(key,"",obj[key]);
// }


// let arr = [10,20,30,40];
// for(let value of arr){
//     console.log(value);
// }

// let fullName = "babbar";
// for(let value of fullName){
//     console.log(value);
// }

let arr = [10,20,30,40,50];
function getSum(arr){
    // let len = arr.length;
    let sum = 0;
    // for(let i = 0; i < len; i++){
    //     sum += arr[i];
    // }
    // return sum;

    arr.forEach((value) => {
        sum = sum + value;
    })

    return sum;
}

let totalSum = getSum(arr);
console.log(totalSum);