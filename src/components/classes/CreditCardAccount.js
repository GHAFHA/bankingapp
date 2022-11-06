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
}

export default CreditCardAccount;