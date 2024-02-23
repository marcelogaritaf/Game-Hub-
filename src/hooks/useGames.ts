import { useEffect, useState } from "react";
import apiClient, { AxiosError, CanceledError } from "../services/api-client";
import { flattenTokens } from "@chakra-ui/react";
export interface Platforms{
    id:number,
    name:string,
    slug:string
}
/**
 * eso es debido a que es un array de objetos que cada objecto tiene
 * una propiedad llamada platform
 */
export interface ApiGames {
    id: number;
    name: string;
    background_image:string
    parent_platforms: {platform:Platforms}[]
    metacritic: number
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
    const [isLoading, setLoading]=useState(false)
  useEffect(() => {
    const controller= new AbortController
    setLoading(true)
    const fectGames = async () => {
      try {
        const res = await apiClient.get<FecthGames>("/games",{signal:controller.signal});
        setGames(res.data.results);
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
  }, []);
  return {games, error, isLoading}
}
export default useGames