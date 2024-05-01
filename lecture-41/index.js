// let a = 5;
// let b = 3;

// // Arithmetic operator
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// let c = 3;
// console.log(++c);
// console.log(c++);
// console.log(--a);
// console.log(a--);

// // Assignment operator
// a = 5;
// a += 3;
// console.log(a);
// console.log(a-=3);

// comparison operator
console.log(4 === 4); // strict equality

// ternary operator
//let age = 10;
//console.log(age > 18?"I can vote":"I cant't vote");

// logical operator
console.log(true && true && false);
console.log(true && 'Anjali');
console.log(false || null);

// bitwise operator
console.log(4 & 3);
console.log(4 | 3);
console.log(3 ^ 3);
console.log(~0);

// Left shift
console.log(5<<3);

// Right shift
console.log(10>>2);


// conditionals
let age = 53;
if(age > 18){
    console.log("i can vote!");
}
else{
    console.log("i can't vote!");
}

let number = 5;
if(number == 1){
    console.log('A');
}
else if(number == 2){
    console.log('B');
}
else if(number == 3){
    console.log('C');
}
else if(number == 4){
    console.log('D');
}
else if(number == 5){
    console.log('E');
}
else{
    console.log('F');
}

number = 2;
// switch case
switch(number){
    case 1:console.log('A');break;
    case 2:console.log('B');break;
    case 3:console.log('C');break;
    case 4:console.log('C');break;
    case 5:console.log('E');
}

// tempelate literals
console.log(`The value of number is ${number}`);