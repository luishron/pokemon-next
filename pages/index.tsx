import { Container, Grid } from "@nextui-org/react";
import { GetStaticProps, NextPage } from "next";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/layouts/pokemon/PokemonCard";
import { PokemonListResponse, SmallPokemon } from "../interfaces/pokemon-list";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }): any => {
  return (
    <Layout title="Listados de Pokemons">
      <Container>
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Grid.Container>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(
    "/pokemon?limit=151",
    {
      headers: {
        "accept-encoding": "*",
      },
    }
  );

  const pokemons: SmallPokemon[] = data.results.map((items, i) => ({
    ...items,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
