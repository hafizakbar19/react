// console.log('oil rate: 3400');

// setTimeout(() => {
//     console.log('gold rate: 9400');
// },1000);
// console.log('silver rate: 4400');
// console.log('gas rate: 400');

//callback

// const hello = (name,callback)=>{
//     console.log(`Hello ${name} !`)
//     callback();
// };

// const bye =()=> console.log('Have a nice day...!');

// hello('Akbar',bye);

//callback hell
// let getResult = (rollNo, callback)=>{
//     setTimeout(() => {
//         console.log(`Result of ${rollNo}`);
//         callback();
//     }, 2000);
// };
// getResult(100,()=>{
//     console.log(`Username is okay....`)
//     getResult(200,()=>{
//         console.log(`password is okay....`)
//         getResult(300,()=>{
//             console.log(`logged in successfully!`)
//             console.log(`result finished`)
//         })
//     })
// });

//promise
// let promise = new Promise((resolve,reject)=>{
//     {
//     let success = true
//     if(success){
//         resolve("the promise is resolved!");

//     }else{
//         reject("the promise is not resolved!");
//     }

// }
// })

// promise.then((data)=>{
//     console.log(data)
// });

// promise.catch((err)=>{
//     console.log(err)
// })

//promise chaining
const getResult = (rollNo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success
      resolve(`Result of student having roll No ${rollNo}`);
      // To simulate error, comment out resolve above and uncomment below
      // reject("Sorry! Result not found!");
    }, 2000);
  });
};
// getResult(112).then((res) => {
//   console.log(res);
//   return getResult(145).then((res) => {
//     console.log(res);
//     return getResult(675).then((res) => {
//       console.log(res);
//     });
//   });
// });
//async await
const result = async () => {
    try {
        const res1 = await getResult(499);
        console.log(res1);
        const res2 = await getResult(876);
        console.log(res2);
    } catch (err) {
        console.error(err);
    }
};

(()=>console.log(`Hello from IIFE`))() //immediately invoked function expression. (it runs once only and runs without calling the function)

