/*
    This file created by Vaughan McInerney (vmm190002)
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