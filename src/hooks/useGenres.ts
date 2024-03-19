import { useQuery } from "@tanstack/react-query";
import useData, { FecthResponse } from "./useData";
import apiClient from "../services/api-client";
export interface Genre{
 id:number,
 name:string
 image_background:string
}
const useGenres= ()=> useQuery<FecthResponse<Genre>>({
    queryKey:['genres'],
    queryFn:()=>apiClient.get<FecthResponse<Genre>>('/genres')
    .then(res=>res.data)    
})
export default useGenres;