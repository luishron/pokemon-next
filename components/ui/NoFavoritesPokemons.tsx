import { Container, Text } from "@nextui-org/react";

export const NoFavoritesPokemons = () => {
  return (
    <Container>
      <Text
        h1
        css={{
          textGradient: "45deg, $blue800 -20%, $pink800 50%",
        }}
      >
        No saved favorites!
      </Text>
    </Container>
  );
};
