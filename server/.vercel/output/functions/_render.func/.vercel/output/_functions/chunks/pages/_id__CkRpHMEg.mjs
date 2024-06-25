const pokemonList = [
  { id: 1, name: "Bulbasaur" },
  { id: 2, name: "Ivysaur" },
  { id: 3, name: "Venusaur" },
  { id: 4, name: "Charmander" },
  { id: 5, name: "Charmeleon" },
  { id: 6, name: "Charizard" },
  { id: 7, name: "Squirtle" },
  { id: 8, name: "Wartortle" },
  { id: 9, name: "Blastoise" }
];
const getPokemonList = async (page) => {
  if (!page) {
    return { list: pokemonList, count: pokemonList.length };
  }
  return { list: pokemonList.slice((page - 1) * 5, page * 5), count: pokemonList.length };
};
const addPokemon = async (pokemon) => {
  if (pokemonList.some((p) => p.id === pokemon.id)) {
    throw new Error("Pokemon already exists");
  }
  pokemonList.push(pokemon);
  return pokemon;
};
const deletePokemon = async (pokemonId) => {
  const index = pokemonList.findIndex((pokemon) => pokemon.id === pokemonId);
  if (index === -1) {
    throw new Error("Pokemon not found");
  }
  return pokemonList.splice(index, 1)[0];
};

const DELETE = async (context) => {
  const id = parseInt(context.params.id ?? "0", 10);
  const pokemon = await deletePokemon(id);
  return new Response(JSON.stringify(pokemon), {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
};

const _id__json = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE
}, Symbol.toStringTag, { value: 'Module' }));

export { _id__json as _, addPokemon as a, deletePokemon as d, getPokemonList as g };
