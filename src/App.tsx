import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platforms } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import "./index.css";
import GameHeading from "./components/GameHeading";
/**
 * esto se realiza para evitar la repeticion de lineas de codigo como estas
 * const [selectedGenre, setSelectedGenre]=useState<Genre|null>(null)
 * const [selectedPlatform, setSelectedPlatform]=useState<Platforms|null>(null)
 */

function App() {
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery); //typescript no permite dejar un objeto vacio // con el as gamequery ya funciona
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //wider than 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack spacing={5} marginBottom={2}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
/**
 * como paso para refectorizar todo el codigo
 * se debe de quitar el local state del gameQuery
 * con esto se debe de modificar(eliminar) cada componente que utilice como props dicho state
 *
 * navBar side=> lo que paso al haber eliminar los props de los componentes del navBar se quita el error
 * genresList side=> esta completo
 */
