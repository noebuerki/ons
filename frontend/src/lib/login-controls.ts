import type { User } from "../models/user";
import { getCookie } from "./util";

function getCsrfToken(): string {
    return getCookie('csrftoken');
}

export async function getCurrentUser(): Promise<User> {
    const csrf = getCsrfToken();
    
    const response = await fetch('/api/users/me', {headers: {'X-CSRFToken': csrf}})
        .then(async (response) => {
            if (!response.ok) throw new Error('Failed to fetch user');

            const user = await response.json();

            return { username: user.username, loggedIn: true };
        })
        .catch((_) => ({username: 'Anonymous', loggedIn: false}));

        console.log(response);

    return {
        username: response.username,
        loggedIn: response.loggedIn
    }
}

export function login(user: object): Promise<Response> {
    const csrf = getCsrfToken();
    
    return fetch('/api/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrf
        },
        body: JSON.stringify(user)
    });
}

export function register(user: object): Promise<Response> {
    const csrf = getCsrfToken();
    
    return fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrf
        },
        body: JSON.stringify(user)
    });
}


export async function logout(): Promise<void> {
    const csrf = getCsrfToken();
    
    await fetch('/api/logout/', {method: 'POST', headers: {'X-CSRFToken': csrf}})
}