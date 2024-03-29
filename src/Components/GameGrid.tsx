// import useGames, { Platform } from "../hook/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
// import { Genre } from "../hook/useGenere";
import { GameQuery } from "../App";
import useGames from "../hook/useGames";
interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  if (error) return <Text>{error}</Text>;
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={5}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((s) => (
            <GameCardContainer key={s} children={<GameCardSkeleton />} />
          ))}
        {data.map((game) => (
          <GameCardContainer
            key={game.id}
            children={<GameCard game={game} />}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
