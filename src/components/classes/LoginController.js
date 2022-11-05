/*
    This file created by Vaughan McInerney (vmm190002)
*/

import User from "./User";

class LoginController {
    constructor() {
        this.active = true;
    }

    loginUser(user) {
        if(User.prototype.isPrototypeOf(user)) {
            return true;
        }
    }
}

const LoginControllerInstance = new LoginController();

Object.freeze(LoginControllerInstance);

export default LoginControllerInstance;