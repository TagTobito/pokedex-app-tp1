import { d as deletePokemon } from './_id__CkRpHMEg.mjs';

const POST = async (context) => {
  const id = parseInt(context.params.id, 10);
  await deletePokemon(id);
  return context.redirect("/");
};

export { POST };
