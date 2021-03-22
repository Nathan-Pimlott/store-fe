import { createContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import adapter from 'axios/lib/adapters/http';

const cookies = new Cookies;

interface IUser {
    email?: string;
    password?: string;
    forename?: string;
    surname?: string;
};

class AuthStore {
    user: IUser | null = null;
    // Used for routing
    loading: boolean = false;
    // Used for rendering loading screen
    processing: boolean = false;
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
            this.processing = true;

            // console.log('About to call');

            // let userRes = await axios.post(
            //     `${process.env.STORE_API}/user/authenticate`,
            //     {
            //         email,
            //         password
            //     },
            //     {
            //         adapter
            //     }
            // );

            // console.log('User Res: ', userRes);


            const user = {
                email,
                forename: 'Nath',
                surname: 'Pimlott'
            }
            this.user = user;
            cookies.set('user', JSON.stringify(user));

            console.log('Set cookie');


            this.processing = false;
        } catch (error) {
            console.error(error.message)
            this.error = error.message;
        }
    }

    logout = async () => {
        try {
            this.loading = true;

            this.user = null;
            cookies.remove('user');

            this.loading = false;
        } catch (error) {
            this.loading = false;
        }
    }
}

const authStore = createContext(new AuthStore())

export default authStore