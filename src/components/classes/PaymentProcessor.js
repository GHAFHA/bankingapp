/*
    CS 3354.005 Fall 2022
    Group 5: Dean Greenberg, Noel Johnson, Oscar Mata-Galvan, Vaughan McInerney, Ruchi Patel, Naod Tesfay
    Professor Srimathi Srinivasan

    This file created by Vaughan McInerney (vmm190002)

    This is an implementation of the PaymentProcessor class.
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