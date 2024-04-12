import React from "react";
import useScreeShots from "../hooks/useScreeShots";
import { Image, SimpleGrid } from "@chakra-ui/react";
interface Props {
  gameId: number;
}
const GameScreeShots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreeShots(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreeShots;
