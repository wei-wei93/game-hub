//Fetching the games
import { GameQueryConfig } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQueryConfig: GameQueryConfig) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQueryConfig.genre?.id,
        platforms: gameQueryConfig.platform?.id,
        ordering: gameQueryConfig.ordering,
      },
    },
    [gameQueryConfig]
  );

export default useGames;
