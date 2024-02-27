import { useEffect, useState } from "react";
import apiClient, { AxiosError, CanceledError } from "../services/api-client";
import useGames from "./useGames";
import { AxiosRequestConfig } from "axios";

interface FecthResponse<T>{
    count: number;
    // next:string,
    // previous:string,
    results: T[];
}
const useData=<T> (endpoint: string, requestConfig?:AxiosRequestConfig, deps?:any[])=>{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading]=useState(false)
  useEffect(() => {
    const controller= new AbortController
    setLoading(true)
    const fectGames = async () => {
      try {
        const res = await apiClient.get<FecthResponse<T>>(endpoint, {signal:controller.signal, ...requestConfig});
        setData(res.data.results);
        setLoading(false)
      } catch (error) {
        {
          if (error instanceof CanceledError) return;
          setError((error as AxiosError).message);
        }
       }//finally{
      //    setLoading(false)
      // }
    };
    fectGames();
    return () => controller.abort()
  },deps? [...deps]:[]);
  return {data, error, isLoading}
}
export default useData;