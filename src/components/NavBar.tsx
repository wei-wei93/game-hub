import { HStack, Image, Text } from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"


const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding='10px'>
        <Image src="src\assets\bridge_and_lake.jpg" boxSize='60px' borderRadius='full'></Image>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar