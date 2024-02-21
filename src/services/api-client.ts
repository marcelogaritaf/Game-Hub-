import axios, { AxiosError, CanceledError } from "axios";
export default axios.create({// la api key 
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'6cd959d31d73486da729cc3e54138ba2'
    }
})
export {AxiosError, CanceledError}