import { writable } from "svelte/store";
import type { Name } from "../types/name";

export const names = writable<Array<Name>>([]);