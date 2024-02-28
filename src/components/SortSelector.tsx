import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Platforms } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";

const SortSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Dated added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Realese date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average Rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
