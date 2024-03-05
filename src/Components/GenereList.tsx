import useGenere from "../hook/useGenere";
import { Text } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

const GenereList = () => {
  const { data, error, isLoading } = useGenere();
  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading && <Spinner />}
      <ul>
        {data.map((genere) => (
          <li key={genere.id}>{genere.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenereList;
