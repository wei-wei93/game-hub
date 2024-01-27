import { Tag } from "@chakra-ui/react";

interface Props {
  score: number; 
}

const CriticScoreTag = ({ score }: Props) => {
  let color = score >= 85? 'green.200' : score > 60? 'yellow.200' : '';

  return (
    <Tag color={color} fontSize={16}>{score}</Tag>
  )
}

export default CriticScoreTag