
import useData from './useData';
export interface Platform{
  id: number,
  slug: string,
  name: string,
}
export interface Game{
  id:number, 
  name: string,
  background_image: string,
  rating: number,
  playtime: number,
  parent_platforms: { platform:Platform }[]
  metacritic: number
}

const useGames = () => {
  const {data, error, isLoading} = useData<Game>("/games");

  return {data, error, isLoading};
}

export default useGames