import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";
import { BiDownArrow } from "react-icons/bi";

interface Props {
  selectedPlatform: Platform | null, 
  onSelectPlatform: (parent_platform: Platform) => void, 
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data: parent_platforms, error } = usePlatforms();

  const allPlatformsOption = {
    id: null, 
    name: 'Platform', 
    slug: '', 
  }

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiDownArrow />}>
        {selectedPlatform ? selectedPlatform.name : "Platform"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onSelectPlatform(allPlatformsOption)} key={allPlatformsOption.name}>Platform</MenuItem>
        {parent_platforms.map((parent_platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(parent_platform)}
            key={parent_platform.id}
          >
            {parent_platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
