const driver = {
    name: "ali",
    age: 45,
    task:()=>{
        console.log('drives a car');
    }
}

const guard = {
    name: "khan",
    // task:()=>{
    //     console.log('opens gate.')
    // }
}

// guard.__proto__=driver;  //this line adds prototype of driver object to the guard object. (not recommended according to research)

Object.setPrototypeOf(guard,driver); //this is the new way to add prototype of one object to another object.

console.log(driver.task())
console.log(guard.task())
console.log(guard.age)