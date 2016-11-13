export class User{
    id: string;
    name: string;
    email: string;
    passWord: string;
    country: string;
    token : string;
    tokenCreateDate : string;

    constructor(){};

    public static isNull(user: User): boolean {
        return user.country === null &&
            user.email === null &&
            user.passWord === null &&
            user.name === null &&
            user.id === null;
    }
}

