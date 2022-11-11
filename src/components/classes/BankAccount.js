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

    static isValidAccountNumber(accountNumberToValidate) {
        if(accountNumberToValidate == null) {
            return false;
        }
        if(!typeof(accountNumberToValidate) === "string") {
            return false;
        }
        else if(accountNumberToValidate.length !== 9) {
            return false;
        }
        for(let digit of accountNumberToValidate) {
            if(digit < '0' || digit > '9') {
                return false;
            }
        }
        return true;
    }

    static isValidRoutingNumber(routingNumberToValidate) {
        if(routingNumberToValidate == null) {
            return false;
        }
        if(!typeof(routingNumberToValidate) === "string") {
            return false;
        }
        else if(routingNumberToValidate.length !== 9) {
            return false;
        }
        for(let digit of routingNumberToValidate) {
            if(digit < '0' || digit > '9') {
                return false;
            }
        }
        return true;
    }

    static isValidDisplayName(displayNameToValidate) {
        return FinancialAccount.isValidDisplayName(displayNameToValidate);
    }

    static isValidFormData(formData) {
        return (
            this.isValidAccountNumber(formData.accountNumber) &&
            this.isValidRoutingNumber(formData.routingNumber) &&
            this.isValidDisplayName(formData.accountName)
        )
    }
}

export default BankAccount;