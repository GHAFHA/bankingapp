/*
    CS 3354.005 Fall 2022
    Group 5: Dean Greenberg, Noel Johnson, Oscar Mata-Galvan, Vaughan McInerney, Ruchi Patel, Naod Tesfay
    Professor Srimathi Srinivasan

    This file created by Vaughan McInerney (vmm190002)

    This is an implementation of the CreditCardAccount class.
*/

import FinancialAccount from "./FinancialAccount";

class CreditCardAccount extends FinancialAccount {
    constructor(displayName, cardNumber, cvvCode, expirationDate) {
        super(displayName);
        this.cardNumber = cardNumber;
        this.cvvCode = cvvCode;
        this.expirationDate = expirationDate;
    }

    getMaskedCreditCardNumber() {
        let output = "";
        let cardNumberString = "" + this.cardNumber
        for(let i = 0; i < cardNumberString.length - 4; i++) {
            output += "*";
        }
        output += cardNumberString.substring(cardNumberString.length - 4);
        return output;
    }

    static isValidCreditCardNumber(creditCardNumberToValidate) {
        if(creditCardNumberToValidate == null) {
            return false;
        }
        if(!typeof(creditCardNumberToValidate) === "string") {
            return false;
        }
        else if(creditCardNumberToValidate.length !== 16) {
            return false;
        }
        for(let digit of creditCardNumberToValidate) {
            if(digit < '0' || digit > '9') {
                return false;
            }
        }
        return true;
    }

    static isValidCvvCode(cvvCodeToValidate) {
        if(cvvCodeToValidate == null) {
            return false;
        }
        if(!typeof(cvvCodeToValidate) === "string") {
            return false;
        }
        else if(cvvCodeToValidate.length !== 3) {
            return false;
        }
        for(let digit of cvvCodeToValidate) {
            if(digit < '0' || digit > '9') {
                return false;
            }
        }
        return true;
    }

    static isValidExpirationDate(expirationDateToValidate) {
        if(expirationDateToValidate == null) {
            return false;
        }
        if(!typeof(expirationDateToValidate) === "string") {
            return false;
        }
        else if(expirationDateToValidate.length !== 7) {
            return false;
        }
        return (
            expirationDateToValidate[0] >= '0' && expirationDateToValidate[0] <= '9' &&
            expirationDateToValidate[1] >= '0' && expirationDateToValidate[1] <= '9' &&
            expirationDateToValidate[2] === '/' &&
            expirationDateToValidate[3] >= '0' && expirationDateToValidate[3] <= '9' &&
            expirationDateToValidate[4] >= '0' && expirationDateToValidate[4] <= '9' &&
            expirationDateToValidate[5] >= '0' && expirationDateToValidate[5] <= '9' &&
            expirationDateToValidate[6] >= '0' && expirationDateToValidate[6] <= '9'
        );
    }

    static isValidFormData(formData) {
        return (
            this.isValidCreditCardNumber(formData.cardNumber) &&
            this.isValidExpirationDate(formData.expirationDate) &&
            this.isValidCvvCode(formData.cvv) &&
            this.isValidDisplayName(formData.accountName)
        )
    }
}

export default CreditCardAccount;