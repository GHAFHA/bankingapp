/*
    CS 3354.005 Fall 2022
    Group 5: Dean Greenberg, Noel Johnson, Oscar Mata-Galvan, Vaughan McInerney, Ruchi Patel, Naod Tesfay
    Professor Srimathi Srinivasan

    This file created by Vaughan McInerney (vmm190002)

    This is an implementation of the TransactionController class, 
    which is instantiated and used by the transaction list user interface.
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