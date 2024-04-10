import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { ApiGames } from "./useGames";
const apiClient = new APIClient<ApiGames>('/games')
const useGame = (slug:string)=> useQuery({
    queryKey:['games', slug],
    queryFn: ()=>apiClient.get(slug)
})
export default useGame;