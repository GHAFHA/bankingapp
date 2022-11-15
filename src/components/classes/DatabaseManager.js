/*
    CS 3354.005 Fall 2022
    Group 5: Dean Greenberg, Noel Johnson, Oscar Mata-Galvan, Vaughan McInerney, Ruchi Patel, Naod Tesfay
    Professor Srimathi Srinivasan

    This file created by Vaughan McInerney (vmm190002)

    This is a stub for the experimental DatabaseManager class.
*/

// import Cookies from 'react-cookie';
// const cookies = new Cookies();

class DatabaseManager {
    static getSessionData() {
        let sessionData = JSON.parse(localStorage.getItem('sessionData'));
        return {
            transactionList: sessionData?.transactionList ?? [],
            bankAccountList: sessionData?.bankAccountList ?? [],
            creditCardAccountList: sessionData?.creditCardAccountList ?? [],
            paymentProcessorList: sessionData?.paymentProcessorList ?? []
        }
    }

    static updateSessionDataField(fieldName, newValue) {
        let sessionData = JSON.parse(localStorage.getItem('sessionData'));
        sessionData = {...sessionData, [fieldName]: newValue};
        localStorage.setItem('sessionData', JSON.stringify(sessionData));
    }

    static saveTransactionList(transactionList) {
        this.updateSessionDataField('transactionList', transactionList);
    }

    static saveBankAccountList(bankAccountList) {
        this.updateSessionDataField('bankAccountList', bankAccountList);
    }

    static saveCreditCardAccountList(creditCardAccountList) {
        this.updateSessionDataField('creditCardAccountList', creditCardAccountList);
    }

    static savePaymentProcessorAccountList(paymentProcessorList) {
        this.updateSessionDataField('paymentProcessorList', paymentProcessorList);
    }

    // static setCurrentUser(user) {
    //     localStorage.setItem('currentUser', user);
    // }


}

export default DatabaseManager;