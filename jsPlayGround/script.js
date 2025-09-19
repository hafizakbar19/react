// let sum = 13;
// for (let i =1; i <= 10; i++){

//     console.log(`${sum} X ${i} = ${i*sum}`)
// }
// console.log("=================");

// let name = prompt("Enter a string");
// let strSize = 0;
// for (const letters of name) {
//     console.log(letters)
//     strSize ++;
// }
// console.log(strSize)

const person = {
    name: "Akbar",
    age: 35,
    city: "Karachi"
}

for(let detail in person){
    console.log(detail, ":" , person[detail])
}
