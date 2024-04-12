import React from "react";
import useTrailers from "../hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";
interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading) return null;
  if (error) throw error;
  const first = data?.results[0]; //para evitar la redundacian en las propiedades de la etiqueta
  return first ? ( // si first es true que muestre el video sino que no renderice nada
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
