import { axios } from "$lib";
import type { AxiosResponse } from "axios";
import type { Name } from "../models/name";

export async function getNames(): Promise<AxiosResponse<Array<Name>>> {
    return  axios.get('/names');
}

export async function createName(name: Partial<Name>): Promise<AxiosResponse> {
    return axios.post('/names', name);
} 

export async function deleteName(id: number): Promise<AxiosResponse<Name>> {    
    return axios.delete(`/names/${id}`);
}