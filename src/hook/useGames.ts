import { useEffect, useState } from 'react'
import apiClient from '../Services/api-client';
import { CanceledError } from 'axios';

export interface Game{
  id:number, 
  name: string,
  background_image: string,
  rating: number,
  playtime: number,

}
interface FetchGamesResponse{
  count: number,
  results: Game[],
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  useEffect(()=> {
    const controller = new AbortController();
    apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal}).then(res => setGames(res.data.results)).catch(err => {
      if(err instanceof CanceledError)  return;
      setError(err);
    })
  })
  return {games, error};
}

export default useGames