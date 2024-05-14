function getAge(){
    return 190;
}

function utility(name = "Love",age = getAge()){
    console.log(name," ",age);
}

utility();
console.log(getAge());


// function sayName(fname = "uday",lname = fname.toUpperCase()){
//     console.log("my name is",fname, "", lname);
// }

// sayName();

// // function solve(value = {age:19,wt:50,ht:170}){
// //     console.log("HELLO JII",value)
// // }

// // function solve(value = ["Love","Rahul","Kunal"]){
// //     console.log("HELLO JII",value)
// // }

// function solve(value = "Rahul"){
//     console.log("HELLO JII",value)
// }

// // solve(null);
// solve(undefined);



// // classes
// class Human{
//     // properties
//     age = 13;  // public
//     #wt = 80;  // private
//     ht = 180;

//     // constructor
//     constructor(newAge,newHeight,newWeight){
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWeight;
//     }


//     // behaviour
//     walking(){
//         console.log("I am walking", this.#wt);
//     }

//     running(){
//         console.log("I am running");
//     }

//     get fetchweight(){
//         return this.#wt;
//     }

//     set modifywt(val){
//         this.#wt = val;
//     }
// }

// let obj = new Human(50,190,90);
// console.log(obj.age);
// console.log(obj.ht);
// obj.running();
// obj.walking();
// console.log(obj.fetchweight);

