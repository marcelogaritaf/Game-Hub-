import React, { useEffect, useState } from "react";
import apiClient, { AxiosError, CanceledError } from "../services/api-client";
import { Text } from "@chakra-ui/react";
interface ApiGames {
  id: number;
  name: string;
}
interface FecthGames {
  count: number;
  // next:string,
  // previous:string,
  results: ApiGames[];
}
const GameGrid = () => {
  const [games, setGames] = useState<ApiGames[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fectGames = async () => {
      try {
        const res = await apiClient.get<FecthGames>("/games");
        setGames(res.data.results);
      } catch (error) {
        {
          if (error instanceof CanceledError) return;
          setError((error as AxiosError).message);
        }
      }
    };
    fectGames();
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
