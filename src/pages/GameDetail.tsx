import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); // ! le dice al typescript compilor que el valor nunca va a ser null
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game?.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetail;
