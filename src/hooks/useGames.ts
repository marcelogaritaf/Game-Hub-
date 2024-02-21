import { useEffect, useState } from "react";
import apiClient, { AxiosError, CanceledError } from "../services/api-client";
export interface ApiGames {
    id: number;
    name: string;
    background_image:string
  }
interface FecthGames {
    count: number;
    // next:string,
    // previous:string,
    results: ApiGames[];
  } 
const useGames=()=>{
    const [games, setGames] = useState<ApiGames[]>([]);
    const [error, setError] = useState("");
  useEffect(() => {
    const controller= new AbortController
    const fectGames = async () => {
      try {
        const res = await apiClient.get<FecthGames>("/games",{signal:controller.signal});
        setGames(res.data.results);
      } catch (error) {
        {
          if (error instanceof CanceledError) return;
          setError((error as AxiosError).message);
        }
      }
      
    };
    fectGames();
    return () => controller.abort()
  }, []);
  return {games, error}
}
export default useGames