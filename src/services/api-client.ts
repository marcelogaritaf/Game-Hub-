import axios, { AxiosError, AxiosRequestConfig, CanceledError } from "axios";
export interface FecthResponse<T>{
    count: number;
     next:string|null,
    // previous:string,
    results: T[];
}
const axiosInstance= axios.create({// la api key 
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'6cd959d31d73486da729cc3e54138ba2'
    }
})
class APIClient<T>{
    endpoint: string
    constructor(endpoint:string){
        this.endpoint= endpoint
    }
    getAll=async (config: AxiosRequestConfig)=>{//la config solo se necesita para el hook games 
        const res = await axiosInstance
            .get<FecthResponse<T>>(this.endpoint, config);
        return res.data;
    }
}
export {AxiosError, CanceledError}
export default APIClient
/**
 * sin funcion asyncrona
 * getAll=(config: AxiosRequestConfig)=>{//la config solo se necesita para el hook games 
        return axiosInstance
            .get<FecthResponse<T>>(this.endpoint, config)
            .then(res=>res.data)
    }
 */