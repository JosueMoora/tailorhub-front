export interface LoginData {
    email: string
    password: string
}
export interface RegisterData {
    name: string
    email: string
    password: string
}

export interface LoginResponse {
    user: User;
}

export interface User {
    id: number;
    name:  string;
    email: string;
}


export interface Restaurants {
    id:          number;
    userId:      number;
    address:     string;
    image:       string;
    description: string;
    name:        string;
}


