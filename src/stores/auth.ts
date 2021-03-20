import { createContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { Cookies } from 'react-cookie';

const cookies = new Cookies;

interface IUser {
    email?: string;
    password?: string;
    forename?: string;
    surname?: string;
};

class AuthStore {
    user: IUser | null = null;
    loading: boolean = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    getIsLoggedIn = async () => {
        this.loading = true;
        try {
            const authCookie = cookies.get('user');

            console.log('Auth Cookie: ', authCookie);

            if (authCookie) {
                this.user = authCookie;
            }

            this.loading = false;
        } catch (error) {
            this.loading = false;
        }
    }

    authenticate = async (email: string, password: string) => {
        try {
            this.loading = true;

            const user = {
                email,
                forename: 'Nath',
                surname: 'Pimlott'
            }
            this.user = user;
            cookies.set('user', JSON.stringify(user));

            console.log('Set cookie');


            this.loading = false;
        } catch (error) {
            this.error = error.message;
        }
    }
}

const authStore = createContext(new AuthStore())

export default authStore