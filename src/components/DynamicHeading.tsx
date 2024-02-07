import { Box, Heading } from "@chakra-ui/react"
import { GameQueryConfig } from "../App"

interface Props {
  gameQueryConfig: GameQueryConfig, 
}

const DynamicHeading = ({ gameQueryConfig }: Props) => {
  const HeadingText = [(gameQueryConfig.parent_platform  && gameQueryConfig.parent_platform.name !== "Platform" ? gameQueryConfig.parent_platform.name : null), 
                      (gameQueryConfig.genre ? gameQueryConfig.genre.name : null), 
                      "Games"]. join(' ')
  
  return (
    <Box marginTop='15px' marginBottom='20px' marginLeft='10px'>
    <Heading as='h1'>{HeadingText}</Heading>
    </Box>
  )
}

export default DynamicHeading