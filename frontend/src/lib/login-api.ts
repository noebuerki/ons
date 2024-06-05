import { axios } from "$lib";
import type { AxiosResponse } from "axios";
import type { User } from "../models/user";

export async function getCurrentUser(): Promise<User> {

    try {
        const response = await axios.get('/users/me');

        const user = response.data;

        return { id: user.id, email: user.email, username: user.username, loggedIn: true };
    } catch (error) {
        return { id: null, email: null, username: null, loggedIn: false };
    }
}

export function login(user: object): Promise<AxiosResponse> {    
    return axios.post('/login/', user, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export function register(user: object): Promise<AxiosResponse> {
    return axios.post('/register', user, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export async function logout(): Promise<void> {
    await axios.post('/logout/');
}

export async function deleteAccount(userId: number): Promise<void> {
    await axios.delete(`/users/${userId}`);
}