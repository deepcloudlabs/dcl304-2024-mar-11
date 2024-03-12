class Account {
    // private members
    // information hiding!
    #iban; // private
    #balance; // private
    constructor(iban,balance) {
        this.#iban = iban;
        this.#balance = balance;
    }
    get_balance = () => {
        return this.#balance;
    }
    deposit = (amount) => {
        if (amount <= 0) throw "You must provide a positive amount";
        this.#balance += amount;
    }
    withdraw = (amount) => {
        if (amount <= 0) throw "You must provide a positive amount";
        if (amount > this.#balance) throw `You must provide an amount less than or equal to balance (${this.balance})`;
        this.#balance -= amount;
    }
}

let acc1 = new Account("tr1", 100_000);
acc1.deposit(25_000); // 125_000
acc1.withdraw(112_500); // 12_500
// acc1.#balance -= 100_000_000;
console.log(acc1.get_balance());