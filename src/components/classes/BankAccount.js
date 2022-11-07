/*
    CS 3354.005 Fall 2022
    Group 5: Dean Greenberg, Noel Johnson, Oscar Mata-Galvan, Vaughan McInerney, Ruchi Patel, Naod Tesfay
    Professor Srimathi Srinivasan

    This file created by Vaughan McInerney (vmm190002)

    This is an implementation of the BankAccount class.
*/

import FinancialAccount from "./FinancialAccount";

class BankAccount extends FinancialAccount {
    constructor(displayName, accountNumber, routingNumber) {
        super(displayName);
        this.accountNumber = accountNumber;
        this.routingNumber = routingNumber;
    }

    getMaskedAccountNumber() {
        let output = "";
        let accountNumberString = "" + this.accountNumber
        for(let i = 0; i < accountNumberString.length - 4; i++) {
            output += "*";
        }
        output += accountNumberString.substring(accountNumberString.length - 4);
        return output;
    }
}

export default BankAccount;