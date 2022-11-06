/*
    CS 3354.005 Fall 2022
    Group 5: Dean Greenberg, Noel Johnson, Oscar Mata-Galvan, Vaughan McInerney, Ruchi Patel, Naod Tesfay
    Professor Srimathi Srinivasan

    This file created by Vaughan McInerney (vmm190002)

    This is an implementation of the UserSettings class, 
    which is instantiated and used by the User class,
    as indicated in our UML diagram.
*/

import User from "./User";

class UserSettings {
    constructor(user) {
        if(User.prototype.isPrototypeOf(user)) {
            this.user = user;
        }
        this.twoFactorAuth = {
            byEmail: false,
            byAuthApp: false
        };
        this.loginNotifications = false;
    }

    deactivate2FA() {
        this.twoFactorAuth.byAuthApp = false;
        this.twoFactorAuth.byEmail = false;
    }

    activateEmail2FA() {
        this.twoFactorAuth.byEmail = true;
    }

    activateEmail2FA() {
        this.twoFactorAuth.byAuthApp = true;
    }

    deactivateLoginNotifications() {
        this.loginNotifications = false;
    }

    activateLoginNotifications() {
        this.loginNotifications = true;
    }
}

export default UserSettings;