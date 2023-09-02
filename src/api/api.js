import axios from "axios";


export const baseurl = "https://slphportfolioapi.azurewebsites.net/api/"

export const api = axios.create({
    baseURL: baseurl
})