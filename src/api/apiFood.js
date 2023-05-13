import axios from "axios";

export const apiFood = axios.create({
    baseURL: "https://api-bootcamp.do.dibimbing.id/api/v1",
    headers: {
        Accept:"application/json",
        apiKey: "w05KkI9AWhKxzvPFtXotUva-"
    }
})