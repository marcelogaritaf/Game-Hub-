import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const { data, error } = usePlatforms();
  const Order = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSearchOrder = useGameQueryStore((s) => s.setSearchOrder);
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Dated added" },
    { value: "name", label: "Name" },
    { value: "-realesed", label: "Realese date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-average", label: "Average Rating" },
  ];
  const currentSortOrder = sortOrder.find((order) => order.value === Order);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            onClick={() => setSearchOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
