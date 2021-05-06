import { createContext } from "react";
import { makeAutoObservable } from "mobx";
import { Cookies } from "react-cookie";

import { authenticate, createUser } from "../services/auth";
import { IUser } from "src/types";

const cookies = new Cookies();

class AuthStore {
    user: IUser | null = null;
    // Used for routing
    loading: boolean = false;
    // Used for rendering loading screen
    processing: boolean = false;
    error: string | null = null;
    showBanner: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    hideBanner = async () => {
        try {
            this.showBanner = false;
        } catch (error) {
            this.error = error;
        }
    };

    getIsLoggedIn = async () => {
        this.loading = true;
        try {
            const authCookie = cookies.get("user");

            if (authCookie) {
                this.user = authCookie;
            }

            this.loading = false;
        } catch (error) {
            this.error = error.message;
            this.loading = false;
        }
    };

    authenticate = async (email: string, password: string) => {
        try {
            this.processing = true;
            this.error = null;

            let user = await authenticate(email, password);

            if (!user.id) {
                this.error = "Invalid email or password";
            } else {
                this.user = user;
            }

            this.processing = false;
        } catch (error) {
            console.error(error.message);
            this.error = "Invalid email or password";
            this.processing = false;
        }
    };

    register = async (user: IUser) => {
        try {
            this.processing = true;
            this.error = null;

            let userRes = await createUser(user);

            if (!userRes.id) {
                throw Error();
            }

            this.processing = false;
        } catch (error) {
            console.error(error.message);
            this.error = "Unable to create user";
            this.processing = false;
        }
    };

    logout = async () => {
        try {
            this.loading = true;

            this.user = null;
            cookies.remove("user");

            this.loading = false;
        } catch (error) {
            this.loading = false;
        }
    };
}

const authStore = createContext(new AuthStore());

export default authStore;
