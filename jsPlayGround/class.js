class Employee {
    constructor(name,age,city,salary){
        this.name = name,
        this.age = age,
        this.city = city,
        this.salary = salary
    }

    infoSummary(){
        console.log(`The employee named ${this.name}'s age is ${this.age} years and he lives in ${this.city}. And takes ${this.salary} salary per month.`)
    }
};

const ziarat = new Employee("Ziarat",43,"Karachi",26000);
ziarat.infoSummary()