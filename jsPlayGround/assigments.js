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
console.log(boxes);
