/*
    CS 3354.005 Fall 2022
    Group 5: Dean Greenberg, Noel Johnson, Oscar Mata-Galvan, Vaughan McInerney, Ruchi Patel, Naod Tesfay
    Professor Srimathi Srinivasan

    This file created by Vaughan McInerney (vmm190002)

    This is an implementation of the LoginController class, 
    which is instantiated and used by the login user interface.
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