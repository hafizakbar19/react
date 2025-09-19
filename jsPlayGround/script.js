// let sum = 13;
// for (let i =1; i <= 10; i++){

//     console.log(`${sum} X ${i} = ${i*sum}`)
// }
// console.log("=================");

const num = document.getElementById('num');
const tableButton = document.getElementById('table-button');

const showTable = ()=>{
    const parentDiv = document.createElement('div');
    const para = document.createElement('p');
    para.innerHTML = "Hello testing";
    parentDiv.appendChild(para);
    // Optionally, append parentDiv to the document
    document.body.appendChild(parentDiv);
}

tableButton.addEventListener('click', showTable);