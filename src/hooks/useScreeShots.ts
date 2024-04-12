import { useQuery } from "@tanstack/react-query"
import { ScreenShots } from "../entities/ScreenShots"
import APIClient from "../services/api-client"

const useScreeShots=(gameId:number)=>{
    const apiclient = new APIClient<ScreenShots>(`/games/${gameId}/screenshots`)
    return useQuery({
        queryKey:['screenShots', gameId],
        queryFn: apiclient.getAll
    })
}
export default useScreeShots;