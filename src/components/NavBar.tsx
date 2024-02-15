import {
  HStack,
  Image,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import GGOlogo from "../assets/GGO_icon.webp";

interface Props {
  onSearch: (searchText: string) => void; 
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack paddingTop="15px" paddingBottom="10px" paddingInline="25px">
      <Image
        src={GGOlogo}
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
