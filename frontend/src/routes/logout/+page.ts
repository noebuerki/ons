import { redirect } from "@sveltejs/kit";

export const ssr = false;

export  async function load() {
    await fetch('/api/logout')
    redirect(300, '/');
}