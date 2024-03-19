import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
interface Props {
  onSelectOrder: (sortOrder: string) => void;
  Order: string;
}
const SortSelector = ({ onSelectOrder, Order }: Props) => {
  const { data, error } = usePlatforms();
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
            onClick={() => onSelectOrder(order.value)}
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
