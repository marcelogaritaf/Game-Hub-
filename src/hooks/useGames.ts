import { useQuery } from "@tanstack/react-query";
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
const useGames=(gameQuery:GameQuery)=>useQuery<FecthResponse<ApiGames>>({
  queryKey:['games', gameQuery],
  queryFn:()=>apiClient.getAll(
  {// se debe de poner el parametro de las configuraciones 
    params:{
      genres:gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id, 
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }
  }
  )
})
export default useGames
