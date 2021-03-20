import { createContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { Cookies } from 'react-cookie';

const cookies = new Cookies;

interface IUser {
    email: string;
    password?: string;
    forename: string;
    surname: string;
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

        const authCookie = cookies.get('auth');

        console.log('Auth Cookie: ', authCookie);

        if (authCookie) {
            this.user = JSON.parse(authCookie);
        }

        this.loading = false;
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

            this.loading = false;
        } catch (error) {
            this.error = error.message;
        }
    }
}

const authStore = createContext(new AuthStore())

export default authStore