import type { Name } from "../models/name";
import { getCsrfToken } from "./util";

export async function getNames(): Promise<Array<Name>> {
    const csrftoken = getCsrfToken();
    const response = await fetch('/api/names', {headers: {'X-CSRFToken': csrftoken}});
    const data = await response.json();
    return data;
}

export async function createName(name: Partial<Name>): Promise<Response> {
    const csrftoken = getCsrfToken();
    return fetch('/api/names', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify(name)
    });
} 

export async function deleteName(id: number): Promise<Response> {
    const csrftoken = getCsrfToken();
    
    return fetch(`/api/names/${id}`, {
        method: 'DELETE',
        headers: {'X-CSRFToken': csrftoken}
    });
}