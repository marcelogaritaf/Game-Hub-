import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { default as APIClient, FecthResponse} from "../services/api-client";
import { Platforms } from "./usePlatforms";
/**
 * eso es debido a que es un array de objetos que cada objecto tiene
 * una propiedad llamada platform
 */
const apiClient =  new APIClient<ApiGames>('/games')
export interface ApiGames {
    id: number;
    name: string;
    background_image:string
    parent_platforms: {platform:Platforms}[]
    metacritic: number, 
    rating_top:number,
  }
const useGames=(gameQuery:GameQuery)=>useInfiniteQuery<FecthResponse<ApiGames>>({
  queryKey:['games', gameQuery],
  queryFn:({pageParam=1})=>apiClient.getAll(
  {// se debe de poner el parametro de las configuraciones 
    params:{
      genres:gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id, 
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
      page:pageParam
    },
  }
  ),
  getNextPageParam:(lastPage, allPages)=>{
    return lastPage.next? allPages.length+1:undefined;
  },
  initialPageParam:undefined
});
export default useGames
/**
 * por se la version 5 de react-query se debe declarar el initialPageParam como undefined 
 * o como un numero en si  
 */