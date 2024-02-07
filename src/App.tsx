import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector, { SortOrder } from "./components/SortSelector";
import DynamicHeading from "./components/DynamicHeading";

export interface GameQueryConfig {
  genre: Genre | null;
  parent_platform: Platform | null;
  sortOrder: SortOrder | null;
  searchText: string | null;
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
        <NavBar
          onSearch={(searchText) =>
            setGameQueryConfig({ ...gameQueryConfig, searchText })
          }
        />
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
        <DynamicHeading gameQueryConfig={gameQueryConfig} />
        <HStack spacing="30px" marginBottom="15px" marginLeft='10px'>
          <PlatformSelector
            selectedPlatform={gameQueryConfig.parent_platform}
            onSelectPlatform={(parent_platform) =>
              setGameQueryConfig({ ...gameQueryConfig, parent_platform })
            }
          />
          <SortSelector
            selectedSortOrder={gameQueryConfig.sortOrder}
            onSelectOrder={(sortOrder) =>
              setGameQueryConfig({ ...gameQueryConfig, sortOrder })
            }
          />
        </HStack>
        <GameGrid gameQueryConfig={gameQueryConfig} />
      </GridItem>
    </Grid>
  );
}

export default App;
