import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> extends Array<T> {
    created: string;
}

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: { 'Authorization': import.meta.env.VITE_API_TOKEN }
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