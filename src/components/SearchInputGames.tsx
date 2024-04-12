import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";
const SearchInputGames = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef.current) {
          setSearchText(searchRef.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant={"filled"}
          ref={searchRef}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInputGames;
/**
 * lo que se realiza en este componente es eliminar el props que se utiliza y en vez del props
 * se utiliza la libreria del store 
  const setSearchText=useGameQueryStore(s=>s.setSearchText)
 * con la linea lo que hace esq solo cuando ese estado cambie solo eso se renderice 
  cosa que no pasaria si se dejara de la siguiente manera 
  const {setSearchText}=useGameQueryStore()

 */
