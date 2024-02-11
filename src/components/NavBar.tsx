import {
  HStack,
  Image,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void; 
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack paddingTop="15px" paddingBottom="10px" paddingInline="25px">
      <Image
        src="src\assets\GGO_icon.png"
        boxSize="60px"
        objectFit='contain'
        borderRadius="full"
      ></Image>
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
