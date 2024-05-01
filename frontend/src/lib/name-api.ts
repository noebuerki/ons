import { axios } from "$lib";
import type { AxiosResponse } from "axios";
import type { Name } from "../models/name";
import { getCsrfToken } from "./util";

export async function getNames(): Promise<AxiosResponse<Array<Name>>> {
    return  axios.get('/names');
}

export async function createName(name: Partial<Name>): Promise<Response> {
    return axios.post('/names', name);
} 

export async function deleteName(id: number): Promise<Response> {
    const csrftoken = getCsrfToken();
    
    return fetch(`/api/names/${id}`, {
        method: 'DELETE',
        headers: {'X-CSRFToken': csrftoken}
    });
}