import axios from "axios";


export const baseurl = "http://localhost:5119/api/"

export const api = axios.create({
    baseURL: baseurl
})