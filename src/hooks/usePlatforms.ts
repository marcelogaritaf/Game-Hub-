import { useQuery } from "@tanstack/react-query"
import useData, { FecthResponse } from "./useData"
import apiClient from "../services/api-client"

interface Platform{
    id:number,
    name:string
    slug:string
}
const usePlatforms=()=>useQuery<FecthResponse<Platform>>({
    queryKey:['plaforms'],
    queryFn:()=> apiClient.get<FecthResponse<Platform>>('/platforms/lists/parents')
    .then(res=>res.data)
})
export default usePlatforms
/**
 * usePlatforms=()=> useQuery({
 *  queryKey:['platforms'],
 *  queryFn: ()=> apiClient.get<fectResponse<Platform>>('/platforms/lists/parents').then(res=>res.data),
 * staleTime:24*60*60*1000-24hrs,
 * initialData:{count:platforms.length, result:platforms} // esto simula el contenido de la peticion de la api
 * })
 * 
 * se debe de exportar la interface dek fectResponse del useData e importarlo aca para que no alla problema
 * en que la data sea de tipo any
 */