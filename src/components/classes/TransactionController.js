/*
    This file created by Vaughan McInerney (vmm190002)
*/

import User from "./User";
import Transaction from "./Transaction"
import FinancialAccount from "./FinancialAccount";

class TransactionController {
    constructor() {
        this.active = true;
    }

    createTransaction(user, account, transactionAmount, description) {
        if(User.prototype.isPrototypeOf(user) && FinancialAccount.prototype.isPrototypeOf(account)) {
            return new Transaction(user, account, transactionAmount, description);
        }
    }
}

const TransactionControllerInstance = new TransactionController();

Object.freeze(TransactionControllerInstance);

export default TransactionControllerInstance;