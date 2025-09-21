console.dir(document.body)
document.body.childNodes[3].innerText = "ja k change over kro text from js";
document.body.children[1].innerText = "no"
document.body.childNodes[1].style.background = "yellow"
const h1 = document.querySelector('h1');
console.dir(h1)


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

// const person = {
//     name: "Akbar",
//     age: 35,
//     city: "Karachi"
// }

// for(let detail in person){
//     console.log(detail, ":" , person[detail])
// }

// string length

// let myStr = prompt("enter your string");
// let strLen = myStr.length;

// for(let i = strLen; i >= 0; i--){
//     console.log(myStr[i])
// }

//string methods
// myStr.includes(".") ? console.log('it contains dot') : console.log('it does not contain dot');
// myStr.startsWith("Pak") ? console.log('it starts with Pak') : console.log('it does not starts with Pak');
// myStr.endsWith(".") ? console.log('it ends with dot') : console.log('it does not ends with dot');
// let sliced = myStr.slice(2,5); // last index in excluded
// let replaced = myStr.replaceAll('a','e');

//assignment password generator.

// let pwd = myStr.slice(0,3).concat('#');
// let combined = pwd.concat(myStr.length);
// console.log(combined);

// let sum = 0;
//  for (let i of myArr) {
//     console.log(i);
//     sum+=i;
// }
// console.log(sum)

// for (let i = myArr.length; i >= 0; i--){
//     console.log(myArr[i]);
// }
// let myArr = [2, 4, 5, 4, 8, 19];
// let greaterNumber = myArr[0];
// for (let i = 0; i <= myArr.length; i++) {
//   if(myArr[i] > greaterNumber){
//     greaterNumber = myArr[i];
//   }
// }
// console.log(greaterNumber);

// let count = 0;
// for (let i = 0; i <= myArr.length; i++) {
//   if (myArr[i] % 2 == 0) count++;
// }
// console.log(count);


// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// console.log(fruits)

// // let spliced = fruits.splice(2,1,"Cherry");
// // console.log(fruits)

// let myStr = "Akbar Ali"


// const findBigger = (a,b)=>{
//     if(a>b){
//         return `${a} is bigger`;
//     }else{
//         return `${b} is bigger`
//     }
// }

// console.log(findBigger(20,15))

// const isEven = (num) => {
//     if(num % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// };

// console.log(isEven(40))

// fruits.forEach((item)=> console.log(item + "s"))
