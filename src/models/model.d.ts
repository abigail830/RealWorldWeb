
export interface UserAuth {
    email: string;
    password: string;
    username: string;
}

export interface LoginReq {
    user: UserAuth;
}

export interface User {
    email: string;
    token: string;
    username: string;
    bio?: string;
    image?: string;
}

export interface LoginResponse {
    user: User;
}

