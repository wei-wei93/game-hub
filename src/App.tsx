import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQueryConfig {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string | null;
}

function App() {
  const [gameQueryConfig, setGameQueryConfig] = useState<GameQueryConfig>(
    {} as GameQueryConfig
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenresList
            selectedGenre={gameQueryConfig.genre}
            onSelectGenre={(genre) =>
              setGameQueryConfig({ ...gameQueryConfig, genre })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing="30px">
          <PlatformSelector
            selectedPlatform={gameQueryConfig.platform}
            onSelectPlatform={(platform) =>
              setGameQueryConfig({ ...gameQueryConfig, platform })
            }
          />
          <SortSelector
            onSelectOrdering={(ordering) =>
              setGameQueryConfig({ ...gameQueryConfig, ordering })
            }
          />
        </HStack>
        <GameGrid gameQueryConfig={gameQueryConfig} />
      </GridItem>
    </Grid>
  );
}

export default App;
