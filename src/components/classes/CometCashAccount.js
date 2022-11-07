/*
    CS 3354.005 Fall 2022
    Group 5: Dean Greenberg, Noel Johnson, Oscar Mata-Galvan, Vaughan McInerney, Ruchi Patel, Naod Tesfay
    Professor Srimathi Srinivasan

    This file created by Vaughan McInerney (vmm190002)

    This is an implementation of the CometCashAccount class.
*/

import FinancialAccount from "./FinancialAccount";

class CometCashAccount extends FinancialAccount {
    constructor(utdId, initialBalance) {
        this.utdId = utdId;
        this.initialBalance = initialBalance;
    }
}

export default CometCashAccount;