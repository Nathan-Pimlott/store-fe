import jwt from "jsonwebtoken";
import { Cookies } from "react-cookie";
import axios from "axios";
import adapter from "axios/lib/adapters/http";

import { IUser } from "src/types";

// prettier-ignore
const cookies = new Cookies;

interface IAuthResponse {
    data: {
        user: IUser;
        authenticated: boolean;
    };
}

export const authenticate = async (
    email: string,
    password: string
): Promise<IUser | null> => {
    try {
        const signedPassword = jwt.sign(
            { password },
            process.env.JWT_SIGNATURE
        );

        let userRes: IAuthResponse = await axios.post(
            "/api/user/authenticate",
            {
                email,
                password: signedPassword,
            },
            {
                adapter,
            }
        );

        if (userRes.data.authenticated) {
            cookies.set("user", JSON.stringify(userRes.data.user));
        }

        return userRes.data.user;
    } catch (error) {
        return null;
    }
};

interface ICreateUserResponse {
    data: {
        user: IUser;
        created: boolean;
    };
}

export const createUser = async (user: IUser): Promise<IUser | null> => {
    try {
        let userRes: ICreateUserResponse = await axios.post(
            "/api/user/create",
            user,
            {
                adapter,
            }
        );

        if (userRes.data.created) {
            cookies.set("user", JSON.stringify(userRes.data.user));
        }

        return userRes.data.user;
    } catch (error) {
        return null;
    }
};
