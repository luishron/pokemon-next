/**
 * 1- Paso el "id" como argumento
 * 2- Grabar el objecto si el "id" no existe "[]".
 * 3- Si es verdad: Filtramos todos los que no son iguales al id. Luego regresa un nuevo arreglo sin el pokemon seleccionado.
 * Si es falso: guardamos el "id" en el objeto
 */
const toggleFavorite = (id: number) => {
  console.log("toggleFavorite Llmamdo");

  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  favorites.includes(id)
    ? (favorites = favorites.filter((pokeId) => pokeId !== id))
    : favorites.push(id);

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const isFavorite = (id: number): boolean => {
  if (typeof window === "undefined") return false;
  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.includes(id);
};

const favoritesPokemonsList = () => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

const exportedFunctions = { toggleFavorite, isFavorite, favoritesPokemonsList };
export default exportedFunctions;
