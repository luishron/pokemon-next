import { Button, Navbar, Spacer, Text, useTheme } from "@nextui-org/react";
import { useRouter } from "next/router";

export const Top = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };
  const handleFavoriteClick = () => {
    router.push("/favorites");
  };
  const { theme } = useTheme();

  return (
    <Navbar isBordered variant="sticky">
      <Text onClick={handleHomeClick}>Pokemons</Text>

      <Spacer css={{ flex: 1 }} />

      <Button bordered color="gradient" auto onClick={handleFavoriteClick}>
        Favorites
      </Button>
    </Navbar>
  );
};
