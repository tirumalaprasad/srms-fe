import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
    headers: { 'Authorization': process.env.API_TOKEN }
})

class APIClient<T>{
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(response => response.data);
    }

    createNew = (config: AxiosRequestConfig, data:any) => {
        return axiosInstance
            .post<FetchResponse<T>>(this.endpoint, data, config)
            .then(response => response.data);
    }

    delete = (config: AxiosRequestConfig, data: any) => {
        return axiosInstance
            .put<FetchResponse<T>>(this.endpoint, data, config)
            .then(response => response.data);
    }
}

export default APIClient;