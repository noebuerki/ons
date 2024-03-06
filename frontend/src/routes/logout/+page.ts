import { redirect } from '@sveltejs/kit';

export async function load(_params) {
    await fetch('/api/logout');
    return redirect(300, '/');
}