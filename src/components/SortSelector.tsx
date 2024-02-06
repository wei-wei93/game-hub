import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiDownArrow } from "react-icons/bi";

export interface SortOrder {
  label: string, 
  value: string | null,
}

interface Props {
  selectedSortOrder: SortOrder | null, 
  onSelectOrder: (sortOrder: SortOrder) => void, 
}

const SortSelector = ({ selectedSortOrder, onSelectOrder }: Props) => {
  const SortOrders = [
    //{ label: '', value: ''}
    {label: "Sort by ...", value: null}, 
    {label: "Relevance", value: ""}, 
    {label: "Name", value: "name"}, 
    {label: "Release date", value: "-released"}, 
    {label: "Date created", value: "-created"}, 
    {label: "Date added", value: "-added"}, 
    {label: "Date updated", value: "-updated"}, 
    {label: "Average rating", value: "-rating"}, 
    {label: "Popularity", value: "-metacritic"}, 

    // ["label", "value"]
    /*
      ["Name", "name"],
      ["Released", "released"],
      ["Added", "added"],
      ["Created", "-created"],
      ["Updated", "updated"],
      ["Rating", "rating"],
      ["Metacritic", "-metacritic"],
    */
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiDownArrow />}>
        {selectedSortOrder ? selectedSortOrder.label : "Sort by ..."}
      </MenuButton>
      <MenuList>
        {SortOrders.map((SortOrder) => (
          <MenuItem onClick={() => onSelectOrder(SortOrder)} key={SortOrder.value}>{SortOrder.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
