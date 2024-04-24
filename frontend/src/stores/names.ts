import { writable } from "svelte/store";
import type { Name } from "../models/name";

export const names = writable<Array<Name>>([]);