import useGenere, { Genre } from "../hook/useGenere";
import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../Services/image-url";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenereList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenere();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <List>
        {data.map((genere) => (
          <ListItem key={genere.id}>
            <HStack paddingX={2} paddingY={2}>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genere.image_background)}
              />
              <Button
                fontWeight={genere.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => {
                  onSelectGenre(genere);
                }}
                variant="link"
                fontSize="lg"
              >
                {genere.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenereList;
