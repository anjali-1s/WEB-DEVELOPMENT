// let element = document.querySelector('#fdiv');
// console.log(element);
// console.log(element.textContent);

// console.log(element.innerText);

// // console.log(document.getElementById('fpara'));
// // console.log(document.getElementsByClassName('textmatter'))
// // console.log(document.getElementsByTagName('p'));

// // console.log(document.querySelector('p'));
// // console.log(document.querySelector('.textmatter'));

// // console.log(document.querySelectorAll('p'));

// console.log(element.innerHTML);
// element.innerHTML = "Hello ji kyse h aaplog";
// console.log(element);

// let fheading = document.createElement('h1');
// fheading.textContent = "My name is Anjali Singh";
// console.log(fheading);

// let bodyTag = document.querySelector('body');
// bodyTag.appendChild(fheading);
// console.log(bodyTag);

// let mydiv = document.querySelector('#Mydiv');
// console.log(mydiv);

// let newElement = document.createElement('span');
// newElement.textContent = "It's me Anjali Singh";
// console.log(newElement);

// mydiv.insertAdjacentElement('beforebegin',newElement);
// console.log(mydiv);


// let First = document.querySelector('#first');
// let fpara = document.createElement('h1');
// fpara.innerText = "ANjali SinGh";


// First.insertAdjacentElement("afterend",fpara);
// console.log(fpara);

let parent = document.querySelector('#Mydiv');
// let parent = child.parentElement;
let child = document.querySelector("#first");
parent.removeChild(child);
