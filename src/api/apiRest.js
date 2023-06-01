import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL

export const apiRest = axios.create({
    baseURL: `${apiURL}/api`
})