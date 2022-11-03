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