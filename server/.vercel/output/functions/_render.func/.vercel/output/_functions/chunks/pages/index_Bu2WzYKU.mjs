import { g as getPokemonList, a as addPokemon } from './_id__CkRpHMEg.mjs';

const GET = async (context) => {
  const page = parseInt(context.url.searchParams.get("page") ?? "1", 10);
  return new Response(JSON.stringify(await getPokemonList(page)), {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
};
const POST = async (context) => {
  const pokemon = await context.request.json();
  await addPokemon(pokemon);
  return new Response(JSON.stringify(pokemon), {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
};

export { GET, POST };
