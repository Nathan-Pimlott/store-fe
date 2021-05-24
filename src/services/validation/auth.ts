const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// Validate the email address
export const validateEmail = (email: string) => {
    try {
        // Validate the format of the email address
        if (!email.match(emailRegex)) {
            return "Invalid email address";
        }
        // Email is required
        if (!email) {
            return "Email is a required field";
        }
    } catch (error) {
        return false;
    }
};

interface ILoginProps {
    email: string;
    password: string;
}

interface ILoginError {
    email?: string;
    password?: string;
}

export const validateLogin = ({ email, password }: ILoginProps) => {
    try {
        const errors: ILoginError = {};

        // Validate the format of the email address
        if (!email.match(emailRegex)) {
            errors.email = "Invalid email address";
        }
        // Email is required
        if (!email) {
            errors.email = "Email is a required field";
        }

        // Password must contain 1 upper case, 1 lower case, 1 number
        if (!password.match(passwordRegex)) {
            errors.password =
                "Password must contain an upper case letters and a number";
        }
        // Password is required
        if (!password) {
            errors.password = "Password is a required field";
        }

        return errors;
    } catch (error) {
        throw Error(error);
    }
};

interface IRegisterProps {
    email: string;
    password: string;
    confirmPassword: string;
    forename: string;
    surname: string;
}

interface IRegisterError {
    email?: string;
    password?: string;
    confirmPassword?: string;
    forename?: string;
    surname?: string;
}

export const validateRegister = ({
    email,
    password,
    confirmPassword,
    forename,
    surname,
}: IRegisterProps) => {
    try {
        let errors: IRegisterError = {};

        // Validate the format of the email address
        if (!email.match(emailRegex)) {
            errors.email = "Invalid email address";
        }
        // Email is required
        if (!email) {
            errors.email = "Email is a required field";
        }

        // Password must contain 1 upper case, 1 lower case, 1 number
        if (!password.match(passwordRegex)) {
            errors.password =
                "Password must contain an upper case letters and a number";
        }
        // Password is required
        if (!password) {
            errors.password = "Password is a required field";
        }

        // Confirm password must match the password
        if (!(password === confirmPassword)) {
            errors.confirmPassword = "Passwords do not match";
        }

        // Forename is required
        if (!forename) {
            errors.forename = "Forename is a required field";
        }

        // surname is required
        if (!surname) {
            errors.surname = "Surname is a required field";
        }

        return errors;
    } catch (error) {
        throw Error(error);
    }
};
