/* 
    This file created by Vaughan McInerney (vmm190002)
*/

import Transaction from "./Transaction";

class PaymentProcessor {
    constructor(processorName) {
        this.processorId = Math.floor(Math.random() * 90000000) + 10000000;
        this.processorName = processorName;
    }
    
    authenticatePayment(transaction) {
        if(!Transaction.prototype.isPrototypeOf(transaction)) {
            throw new TypeError();
        }
        return true;
    }

    conf
}

export default PaymentProcessor;