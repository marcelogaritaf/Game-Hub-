import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platforms } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
interface Props {
  selectGenre: Genre | null;
  selectPlaforms: Platforms | null;
}
const GameGrid = ({ selectGenre, selectPlaforms }: Props) => {
  const { data, error, isLoading } = useGames(selectGenre, selectPlaforms);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={2}
        spacing={5}
        justifyItems={"center"}
      >
        {isLoading &&
          skeleton.map((ske) => (
            <GameCardContainer key={ske}>
              {" "}
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((g) => (
          <GameCardContainer key={g.id}>
            <GameCard game={g} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
