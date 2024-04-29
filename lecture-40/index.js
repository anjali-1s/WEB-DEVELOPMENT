// var age = 25;


// if(true){
//     console.log(age);
// }

// function solve(){
//     var age = 25;
//     console.log(age);
// }
// console.log(age);
// solve();

// var age = 30;
// var age = 20;

// {
// let age = 10;
// console.log(age);
// }

// let z = 10;
// z = "babbar";

// const a = 10;
// a = 20;


// DATA TYPES
// let marks = 20.234;
// marks = "babbar";
// marks = true;
// let marks;
// console.log(marks);

// let val = null;
// console.log(val);


// let marks = 873387398217309830912830836375634875643785634785634785678568347657848563578634785643785634785634875634875634875634785634785683475634785683475684756834756834756347856834756834573485634785673485684756348756839564837563487564837563478712937023828329468923702138;
// console.log(typeof(marks));

// symbol data type
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
console.log(sym2);

const sym = Symbol("hello");
console.log(typeof(sym));
const symobj = Object(sym);
console.log(typeof(symobj));

if(sym2 === sym3){
    console.log("true");
}
else{
    console.log("false");
}