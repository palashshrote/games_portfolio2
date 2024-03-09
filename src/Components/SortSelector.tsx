import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { IoChevronDownCircleOutline } from "react-icons/io5";
interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
}
const SortSelector = ({ onSelectSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released date" },
    { value: "-added", label: "Date added" },
    { value: "-metacritic", label: "Metacritic" },
    { value: "-rating", label: "Rating" },
  ];
  const str = "Order by : ";
  const [display, setDisplay] = useState(str + "Relevance");
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoChevronDownCircleOutline />}>
        {display}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => {
              onSelectSortOrder(order.value);
              setDisplay(str + order.label);
            }}
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
