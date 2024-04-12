import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInputGames from "./SearchInputGames";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="12px">
      <Link to={"/"}>
        <Image src={logo} boxSize="60px" borderRadius={20} />
      </Link>
      <SearchInputGames />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
/**
 * por motivo de que ya hay tres componentes el justifyContent={"space-between"}
 */
