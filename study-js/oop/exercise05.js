class Employee {
    constructor(identity,fullname,salary,iban) {
        this.identity = identity;
        this.fullname = fullname;
        this.salary = salary;
        this.iban = iban;
    }

    increaseSalary(rate){
        this.salary = this.salary * (1.0 + rate / 100);
    }

    sayHello(){
        console.log(`Hello, ${this.fullname}!`);
    }
}