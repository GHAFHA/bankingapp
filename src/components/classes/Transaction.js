import FinancialAccount from "./FinancialAccount";


class Transaction {
    constructor(account, transactionAmount, description) {
        this.transactionID = Math.floor(Math.random() * 90000000000) + 10000000000;
        this.description = description;
        this.time = Date.now();
        this.transactionAmount = transactionAmount;

        if (FinancialAccount.prototype.isPrototypeOf(account)) {
            this.account = account;
        }
    }
}

export default Transaction;