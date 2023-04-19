import axios from "axios";

export const apiTmdb = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Accept:"application/json"
    },
    params: {
        api_key: "531141070857720d2988be054b0e4707"
    },
})