import type { APIRoute } from "astro";
import { deletePokemon, getPokemonList } from "../../../services/pokemon";

export const DELETE: APIRoute = async (context) => {

  const idParam = context.params.id;

  if (typeof idParam === 'string'){
    const id = parseInt(idParam,10)
    await deletePokemon(id); 

    return new Response(JSON.stringify(await getPokemonList()), {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control' : 'no-cache' 
      }
    })
  }else{
    return new Response("Invalid ID", { status: 400 });
  }
}