class FinancialAccount {
    constructor(displayName) {
        this.accountId = Math.floor(Math.random() * 9000000) + 1000000;
        this.isValid = true;
        this.displayName = displayName;
    }

    validate() {
        return this.isValid;
    }

}

export default FinancialAccount;

