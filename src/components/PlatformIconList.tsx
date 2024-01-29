import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiCommodore, SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  //key-value pairs, key: string; value: IconType 
  const iconMap: { [key: string]: IconType } = {
    "pc": FaWindows,
    "playstation": FaPlaystation,
    "xbox": FaXbox,
    "nintendo": SiNintendo,
    "mac": FaApple,
    "linux": FaLinux,
    "android": FaAndroid,
    "ios": MdPhoneIphone,
    "web": BsGlobe,
    "commodore-amiga": SiCommodore, 
    "sega": SiSega, 
  };

  return (
    <HStack spacing="5px" marginY={2} >
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color="gray.400"
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
