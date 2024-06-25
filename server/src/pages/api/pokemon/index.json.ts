import type { APIRoute } from "astro"
import { addPokemon, getPokemonList } from "../../../services/pokemon"

export const GET: APIRoute = async (context) => {
  const pokemons = await getPokemonList();
  
  
  return new Response(JSON.stringify(pokemons), {  
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })
}

export const POST: APIRoute = async (context) => {
  const data = await context.request.formData();

  const id = parseInt(data.get('id') as string)
  const name = data.get('name') as string
  
  if (!id || !name) {

    return context.redirect('/?error=Invalid%20input')

  }

  const pokemon = {id, name}

  await addPokemon(pokemon)

  return new Response(JSON.stringify(await getPokemonList()), {

    headers: {

      'content-type': 'application/json',

      'Access-Control-Allow-Origin': '*',

      'Cache-Control' : 'no-cache' // desactivar el caché

    }

  })

}