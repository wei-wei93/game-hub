//Fetching the games
import { GameQueryConfig } from "../App";
import useData from "./useData";

export interface Platform {
  id: number | null;
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
        parent_platforms: gameQueryConfig.parent_platform?.id,
        ordering: gameQueryConfig.sortOrder?.value,
        search: gameQueryConfig.searchText, 
      },
    },
    [gameQueryConfig]
  );

export default useGames;
