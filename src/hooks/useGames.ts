import useData from "./useData";
import { Genre } from "./useGenres";
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
const useGames=(selectedGenre:Genre|null, selectedPlatforms:Platforms|null)=>useData<ApiGames>('/games',{
  params:{
    genres:selectedGenre?.id, parent_platforms: selectedPlatforms?.id
  }}, [
    selectedGenre?.id, selectedPlatforms?.id
  ]);
export default useGames