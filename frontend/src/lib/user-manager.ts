import type { User } from "../models/user";

export function getCurrentUser(): User {
    return {
        loggedIn: false,
    }
}

export function login(user: object): Promise<Response> {
    return fetch('/api/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
}

export function register(user: object): Promise<Response> {
    return fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
}

export function logout(): void {
    localStorage.removeItem('user');
}