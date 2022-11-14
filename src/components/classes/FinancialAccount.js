/*
    CS 3354.005 Fall 2022
    Group 5: Dean Greenberg, Noel Johnson, Oscar Mata-Galvan, Vaughan McInerney, Ruchi Patel, Naod Tesfay
    Professor Srimathi Srinivasan

    This file created by Vaughan McInerney (vmm190002)

    This is an implementation of the FinancialAccount class, 
    which is a superclass of BankAccount, CreditCardAccount, and CometCashAccount,
    as indicated in our UML diagram.
*/

class FinancialAccount {
    constructor(displayName) {
        this.accountId = Math.floor(Math.random() * 9000000) + 1000000;
        this.isValid = true;
        this.displayName = displayName;
    }

    validate() {
        return this.isValid;
    }

    static isValidDisplayName(displayNameToValidate) {
        if(displayNameToValidate == null) {
            return false;
        }
        if(!typeof(displayNameToValidate) === "string") {
            return false;
        }
        else if(displayNameToValidate?.length === 0) {
            return false;
        }
        return true;
    }

}

export default FinancialAccount;

