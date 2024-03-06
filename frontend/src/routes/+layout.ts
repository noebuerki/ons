export const prerender = true;
export async function load() {
    return {
        user: {
            username: 'admin',
            loggedIn: true,
        }
    }
}