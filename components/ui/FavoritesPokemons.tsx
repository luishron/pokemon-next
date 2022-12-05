import { Container, Grid } from "@nextui-org/react";
import { FC } from "react";
import { FavoriteCardPokemon } from "../layouts/pokemon";

interface Props {
  pokemons: number[];
}

export const FavoritesPokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Container>
      <Grid.Container gap={2} direction="row" justify="flex-start">
        {pokemons.map((id) => (
          <Grid xs={6} sm={3} xl={1} key={id}>
            <FavoriteCardPokemon key={id} pokemonId={id} />
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
};
