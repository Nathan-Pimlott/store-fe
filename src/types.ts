export interface ILoginProps {
    email: string;
    password: string;
}

export interface IRegisterProps {
    email: string;
    password: string;
    confirmPassword: string;
    forename: string;
    surname: string;
}

export interface IUser {
    id?: string;
    email: string;
    forename: string;
    surname: string;
    password?: string;
}

export interface IProduct {
    id?: string;
    name: string;
    description: string;
    img: string;
    gender: "mens" | "womens";
    price: number;
    color: string;
}

export interface IFilterProducts {
    name?: string;
    gender?: "mens" | "womens";
    priceMin?: number;
    priceMax?: number;
    color?: string;
}
