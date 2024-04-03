import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const selectGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
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
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit={"cover"}
              />{" "}
              <Button
                onClick={() => setGenreId(genre.id)}
                fontSize={"lg"}
                variant={"link"}
                fontWeight={genre.id === selectGenreId ? "bold" : "normal"}
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
/**
 * lo mismo que el componente pasado se eliman las props pero en este caso
 * no solo se necesita la funcion sino tambien el numero
 * entonces se realiza de la siguiente manera
 * const selectGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  el primero para el numero entero
  el segundo para la funcion 
  como en el componente pasado se hace que solo cuando este reciba una modificacion solo 
  eso se renderice 
 */
