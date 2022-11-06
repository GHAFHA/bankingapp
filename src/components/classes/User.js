/*
    CS 3354.005 Fall 2022
    Group 5: Dean Greenberg, Noel Johnson, Oscar Mata-Galvan, Vaughan McInerney, Ruchi Patel, Naod Tesfay
    Professor Srimathi Srinivasan

    This file created by Vaughan McInerney (vmm190002)

    This is an implementation of the User class.
*/

import UserSettings from "./UserSettings";
import CometCashAccount from "./CometCashAccount"

class User {
    constructor(userId, institutionalId, displayName) {
        this.userId = userId;
        this.institutionalId = institutionalId;
        this.displayName = displayName;
        this.lastLogin = null;

        this.bankAccountList = [];
        this.creditCardAccountList = [];

        this.userSettings = new UserSettings(this);
        this.cometCashAccount = new CometCashAccount(institutionalId, this.retrieveCometCashBalance())
    }

    retrieveCometCashBalance() {
        return 50.00;
    }

}

export default User;