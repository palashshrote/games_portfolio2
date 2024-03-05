import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color =
    score > 90 ? "green" : score > 80 ? "red" : score > 70 ? "green" : "";
  return (
    <Badge colorScheme={color} fontSize="20px">
      {score}
    </Badge>
  );
};

export default CriticScore;
