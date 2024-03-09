import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GameGrid from "./Components/GameGrid";
import GenereList from "./Components/GenereList";
import { useState } from "react";
import { Genre } from "./hook/useGenere";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hook/useGames";
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchData: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar
          onSelectSearchData={(searchData) => {
            setGameQuery({ ...gameQuery, searchData });
          }}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenereList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <HStack paddingLeft={5} paddingBottom={3}>
          <PlatformSelector
            onSelectPlatform={(platform) => {
              setGameQuery({ ...gameQuery, platform });
            }}
          />
          <SortSelector
            onSelectSortOrder={(sortOrder) => {
              setGameQuery({ ...gameQuery, sortOrder });
            }}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
