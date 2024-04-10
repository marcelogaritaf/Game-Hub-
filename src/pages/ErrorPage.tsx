import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={6}>
        <Heading>Oopss </Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occured."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
/**
 * se puso el navbar debido a que no se renderiza por motivo de que no es
 * parte del outlet como lo son las demas paginas
 *
 * hay una mejor forma para evitar asi esta repeticion pero por ahora se queda asi
 */
