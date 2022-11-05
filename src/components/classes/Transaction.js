/* 
    This file created by Vaughan McInerney (vmm190002)
*/

import FinancialAccount from "./FinancialAccount";
import User from "./User";

class Transaction {
    constructor(user, account, transactionAmount, description) {
        if(!User.prototype.isPrototypeOf(user)) {
            throw new TypeError();
        }
        else if(!FinancialAccount.prototype.isPrototypeOf(account)) {
            throw new TypeError();
        }

        this.transactionId = Math.floor(Math.random() * 90000000) + 10000000;
        this.transactionAmount = transactionAmount;
        this.user = user;
        this.account = account;
        this.description = description;
        this.time = Date.now();
    }
}

export default Transaction;