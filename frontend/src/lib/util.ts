import type { AxiosResponse } from "axios";

export function getCookie(cname: string) {
    const name = cname + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export function getCsrfToken(): string {
    return getCookie('csrftoken');
}

export function isOk(response: AxiosResponse) {
    return response.status >= 200 && response.status < 300;
}
