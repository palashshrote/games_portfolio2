
import useData from './useData';
import { Genre } from './useGenere';
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

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => {
  const {data, error, isLoading} = useData<Game>("/games",{
    params:{
      genres: selectedGenre?.id,
      platforms: selectedPlatform?.id,
    }
  },[
    selectedGenre?.id,
    selectedPlatform?.id
  ]);

  return {data, error, isLoading};
}

export default useGames