import axios from "axios";

const myconfig = axios.create({
    baseURL: "/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "X-CSRFToken",
});

export default myconfig;