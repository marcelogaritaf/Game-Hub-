import { useEffect, useState } from "react";
import apiClient, { AxiosError, CanceledError } from "../services/api-client";
interface Genre{
 id:number,
 name:string
}
interface FecthGenre{
    count: number;
    // next:string,
    // previous:string,
    results: Genre[];
}
const useGenres= ()=>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading]=useState(false)
  useEffect(() => {
    const controller= new AbortController
    setLoading(true)
    const fectGames = async () => {
      try {
        const res = await apiClient.get<FecthGenre>("/genres",{signal:controller.signal});
        setGenres(res.data.results);
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
  return {genres, error, isLoading}
}
export default useGenres;