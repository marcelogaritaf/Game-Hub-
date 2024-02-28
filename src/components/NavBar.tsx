import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInputGames from "./SearchInputGames";
const NavBar = () => {
  return (
    <HStack padding="12px">
      <Image src={logo} boxSize="60px" />
      <SearchInputGames />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
/**
 * por motivo de que ya hay tres componentes el justifyContent={"space-between"}
 */
