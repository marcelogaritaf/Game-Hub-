import { Box, Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";
interface props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: props) => {
  return (
    <Box marginY={5}>
      <Heading as={"dt"} fontSize={"md"} color={"gray.600"}>
        {term}
      </Heading>
      <dt>{children}</dt>
    </Box>
  );
};

export default DefinitionItem;
