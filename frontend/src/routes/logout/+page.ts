import { redirect } from '@sveltejs/kit';

export async function load(_params) {
    return redirect(300, '/');
}