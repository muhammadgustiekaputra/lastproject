import axios from "axios";

export const apiFood = axios.create({
    baseURL: "https://api-bootcamp.do.dibimbing.id/api/v1",
    headers: {
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11aGFtbWFkZ3VzdGlla2FwdXRyYUBnbWFpbC5jb20iLCJ1c2VySWQiOiI0NzlkMThlMS1jYmFhLTRkOGItYTEzYi1iYmJlYjU3ZjEyNzYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODM0NTM4MDh9.cw3OpXk9Atz14uFxXpovXHeHCHTVjeYR3DNlgSVI1_0",
        Accept:"application/json",
        apiKey: "w05KkI9AWhKxzvPFtXotUva-"
    }
})