import React, { useState } from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectGenre: Genre | null;
}
const GenreList = ({ selectGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize={"3xl"} marginBottom={3}>
        Genres
      </Heading>
      {/* {error && null}
      {isLoading && <Spinner />} */}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit={"cover"}
              />{" "}
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize={"lg"}
                variant={"link"}
                fontWeight={genre.id === selectGenre?.id ? "bold" : "normal"}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
