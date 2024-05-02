for(let i = 1; i <= 10; i++){
    console.log("babbar");
}

//counting upto 5
for(let i = 1; i <= 5; i++){
    console.log(i);
}

// table of 12
let num = 12;
for(let i = 1; i <= 10; i++){
    console.log(num * i);
}

// reverse counting from 10 to 1
for(let i = 10; i >= 1; i--){
    console.log(i);
    if(i == 5){
        break;
    }
    else{
        console.log("inside loop");
    }
}
console.log("out of loop");

for(let i = 1; i <= 5; i++){
    if(i == 4){
        continue;
    }
    else{
        console.log(i);
    }
}

// while loop
let i = 1;
while(i <= 10){
    console.log("inside the loop");
    if(i == 6){
        //break;
        i++;
        continue;
    }
    else{
        console.log("hii");
    }
    i++;
}

let number = 15;
let j = 1;
while(j <= 10){
    console.log(`${number} * ${j} = ${number * j}`);
    j++;
}


let a = 1;
do{
    console.log(a);
    a++;
}while(a < 0);
console.log(a);


// strings
let firstName = "Love Babbar";
let lastName = 'Babbar';
let name = `My 
Name is
Anjali Singh.`;
console.log(name);

let Name = new String("Anjali Singh");
console.log(Name);

let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2);  // concatenation of string

let finalAns = `${str1 + " " + str2}`;    // concatenation of string
console.log(finalAns);

console.log(str2.length);

console.log(str1.toUpperCase());
console.log(str2.toLowerCase());

let str3 = "Babbar";
console.log(str3.substring(3));
console.log(str3.substring(1,4));

let sentence = "hello \\ji \\kaise \\ho \\sare?";
let words = sentence.split('\\');
console.log(words);

console.log(words.join(','));