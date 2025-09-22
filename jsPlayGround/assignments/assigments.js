// let userInput = prompt("Enter your words");

// let h1 = document.querySelector('h1');

// h1.innerText = h1.innerText + userInput
let boxes = document.getElementsByClassName("boxes");
const changeNames = () => {
    let num = 1;
 for(let box of boxes){
    box.innerHTML = `Box no ${num}`;
    num++;
 }
};
const changeBtn = document.getElementById('changeBtn');
changeBtn.addEventListener('click',()=>changeNames());
// console.log(boxes);

const heading = document.createElement('h1');

heading.innerHTML= "My new heading through javascript";

document.querySelector('div').before(heading);

heading.style.color = "blue";
heading.style.fontSize = "40px";
heading.style.fontStyle = 'italic';

let paraDiv = document.querySelectorAll('p');
console.log( paraDiv)

let combinedParas = '';

for(let text of paraDiv){
    combinedParas += text.innerText + " ";
}

// combinedParas = paraDiv.reduce((prev,next)=>{
//     return prev.innerText + next.innerText
// })

console.log(combinedParas)

let newPara = document.createElement('p');

newPara.innerText = combinedParas;

document.body.appendChild(newPara)
