import { a as addPokemon } from './_id__CkRpHMEg.mjs';

const POST = async (context) => {
  const data = await context.request.formData();
  const id = parseInt(data.get("id"));
  const name = data.get("name");
  if (!id || !name) {
    return context.redirect("/?error=Invalid%20input");
  }
  const pokemon = { id, name };
  await addPokemon(pokemon);
  return context.redirect("/");
};

export { POST };
