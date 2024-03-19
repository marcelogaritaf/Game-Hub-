import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/api-client"
import { FecthResponse } from "../services/api-client"

export interface Platforms{
    id:number,
    name:string
    slug:string
}
const usePlatforms=()=>useQuery<FecthResponse<Platforms>>({
    queryKey:['plaforms'],
    queryFn:()=> apiClient.get<FecthResponse<Platforms>>('/platforms/lists/parents')
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