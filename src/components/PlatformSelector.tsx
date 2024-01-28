import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";
import { BiDownArrow } from "react-icons/bi";

interface Props {
  selectedPlatform: Platform | null, 
  onSelectPlatform: (platform: Platform) => void, 
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiDownArrow />}>
        {selectedPlatform ? selectedPlatform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
