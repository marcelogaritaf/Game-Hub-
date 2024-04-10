import { Box, transition } from "@chakra-ui/react";
import { transform } from "framer-motion";
import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width={"100%"}
      borderRadius={10}
      overflow={"hidden"}
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
        cursor: "pointer",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
