export class User{
    id: string;
    name: string;
    email: string;
    password: string;

    constructor(id: string,
                name: string,
                email: string,
                password: string){};

    public static isNull(user: User): boolean {
        return user.email === null &&
            user.password === null &&
            user.name === null &&
            user.id === null;
    }
}

