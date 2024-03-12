class Employee {
    constructor(identity,fullname,salary,iban) {
        this.identity = identity;
        this.fullname = fullname;
        this.salary = salary;
        this.iban = iban;
//        this.increaseSalary = this.increaseSalary.bind(this);
//        this.sayHello = this.sayHello.bind(this);
    }

    // this.increaseSalary = this.increaseSalary.bind(this); : automatically binds to this
    increaseSalary = (rate) => { // lambda expression
        this.salary = this.salary * (1.0 + rate / 100);
    }

    // this.sayHello = this.sayHello.bind(this); : automatically binds to this
    sayHello = () => { // lambda expression
        // console.table(this);
        console.log(`Hello, ${this.fullname}!`);
    }
}

let jack = new Employee("11111111110", "jack bauer", 100_000, "tr1");
jack.sayHello();
setInterval( jack.sayHello, 3_000);
