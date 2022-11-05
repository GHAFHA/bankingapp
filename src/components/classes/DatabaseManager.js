/*
    This file created by Vaughan McInerney (vmm190002)
*/

class DatabaseManager {
    constructor() {
        this.active = true;
        this.transactionList = [];
        this.userList = [];
        this.paymentProcessorList = [];
    }

}

export default DatabaseManager;