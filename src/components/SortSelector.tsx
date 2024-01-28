import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiDownArrow } from "react-icons/bi";

interface Props {
  onSelectOrdering: (ordering: string) => void, 
}

const SortSelector = ({ onSelectOrdering }: Props) => {
  const orderings = [
    "name",
    "released",
    "added",
    "created",
    "updated",
    "rating",
    "-metacritic",
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiDownArrow />}>
        Sort by ...
      </MenuButton>
      <MenuList>
        {orderings.map((ordering) => (
          <MenuItem onClick={() => onSelectOrdering(ordering)} key={ordering}>{ordering}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
