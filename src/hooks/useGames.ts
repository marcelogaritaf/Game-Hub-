import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { FecthResponse } from "./useData";
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
    metacritic: number, 
    rating_top:number,
  }
const useGames=(gameQuery:GameQuery)=>useQuery<FecthResponse<ApiGames>>({
  queryKey:['games', gameQuery],
  queryFn:()=>apiClient.get<FecthResponse<ApiGames>>('/games',
  {
    params:{
      genres:gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id, 
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }
  }
  ).then(res=>res.data)
})
export default useGames