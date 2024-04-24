import type { Gender } from "./gender";

export interface Name {
    id: number;
    name: string;
    gender: Gender;
}