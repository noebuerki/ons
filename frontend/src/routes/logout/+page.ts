import { logout } from "$lib/login-controls";
import { redirect } from "@sveltejs/kit";

export const ssr = false;

export async function load() {
    logout();
    redirect(300, '/');
}