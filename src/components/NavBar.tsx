import { HStack, Image, Text } from "@chakra-ui/react"


const NavBar = () => {
  return (
    <HStack>
        <Image src="src\assets\bridge_and_lake.jpg" boxSize='60px' borderRadius='full'></Image>
        <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar