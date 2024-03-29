import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { FecthResponse } from "../services/api-client";
const apiClient = new APIClient<Genre>('/genres')
export interface Genre{
 id:number,
 name:string
 image_background:string
}
const useGenres= ()=> useQuery<FecthResponse<Genre>>({
    queryKey:['genres'],
    queryFn:apiClient.getAll
})
export default useGenres;