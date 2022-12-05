import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { FavoritesPokemons, NoFavoritesPokemons } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavoritePage = () => {
  const [favoritePokemons, setFavoritePokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemon(localFavorites.favoritesPokemonsList());
  }, []);

  return (
    <Layout title="Pokemos - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavoritesPokemons />
      ) : (
        <FavoritesPokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritePage;
