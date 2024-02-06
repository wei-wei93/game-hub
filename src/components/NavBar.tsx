import { HStack, Image, Text } from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"


const NavBar = () => {
  return (
    <HStack justifyContent="space-between" paddingTop='15px' paddingBottom='10px' paddingInline='25px'>
        <Image src="src\assets\GGO_icon.png" boxSize='60px' borderRadius='full' ></Image>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar