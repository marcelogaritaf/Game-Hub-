import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { default as APIClient, FecthResponse } from "../services/api-client";
import useGameQueryStore from "../store";
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
const useGames=()=>{
  const gameQuery=useGameQueryStore(s=>s.gameQuery)
  return useInfiniteQuery<FecthResponse<ApiGames>>({
    queryKey:['games', gameQuery],
    queryFn:({pageParam=1})=>apiClient.getAll(
    {// se debe de poner el parametro de las configuraciones 
      params:{
        genres:gameQuery.genreId, 
        parent_platforms: gameQuery.platformId, 
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page:pageParam
      },
    }
    ),
    getNextPageParam:(lastPage, allPages)=>{
      return lastPage.next? allPages.length+1:undefined;
    },
    initialPageParam:undefined,
    staleTime:ms('24h')
  
  });
}


export default useGames
/**
 * por se la version 5 de react-query se debe declarar el initialPageParam como undefined 
 * o como un numero en si  
 */