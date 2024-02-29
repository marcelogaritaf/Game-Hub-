import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInputGames from "./SearchInputGames";
interface Props {
  onSearch: (SearchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="12px">
      <Image src={logo} boxSize="60px" borderRadius={20} />
      <SearchInputGames onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
/**
 * por motivo de que ya hay tres componentes el justifyContent={"space-between"}
 */
