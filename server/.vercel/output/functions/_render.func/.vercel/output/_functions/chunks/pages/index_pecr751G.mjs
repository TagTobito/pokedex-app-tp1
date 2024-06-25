/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, k as renderComponent, m as maybeRenderHead } from '../astro_E1le-QR0.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { g as getPokemonList } from './_id__CkRpHMEg.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "F:/1 Cuatrimestre 2024/Progra III/pokedexapps-2/server/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { list } = await getPokemonList();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pokedex" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto flex flex-col"> <h1 class="text-5xl text-red-600 font-extrabold text-center">Pokedex</h1> <form action="/api/pokemon" method="post"> <h2 class="text-2xl text-red-700 font-bold">Agregar nuevo pokemon</h2> <input type="number" name="id" placeholder="ID" class="my-1 w-full p-2 border border-gray-300 rounded-lg"> <input type="text" name="name" placeholder="Name" class="my-1 w-full p-2 border border-gray-300 rounded-lg"> <button type="submit" class="w-full p-2 bg-red-600 text-white rounded-lg mt-2 font-bold uppercase duration-200 hover:bg-red-700">Agregar</button> </form> <ul class="mt-4 border-4 border-red-700"> <li class="flex items-center justify-between border-b border-gray-300 p-2 bg-red-700"> <span class="text-lg text-white font-extrabold w-1/3">ID</span> <span class="text-lg text-white font-extrabold w-1/3 text-center">Name</span> <span class="text-lg text-white font-extrabold w-1/3 text-right">DELETE</span> </li> ${list.map((pokemon) => renderTemplate`<li class="flex items-center justify-between border-b border-gray-300 p-2"> <span class="text-lg text-red-600 font-bold w-1/3">${pokemon.id}</span> <span class="text-lg text-red-600 font-bold w-1/3 text-center">${pokemon.name}</span> <form${addAttribute(`/api/pokemon/${pokemon.id}`, "action")} method="post" class="w-1/3 text-right"> <button type="submit" class="font-bold hover:font-extrabold">X</button> </form> </li>`)} </ul> </main> ` })}`;
}, "F:/1 Cuatrimestre 2024/Progra III/pokedexapps-2/server/src/pages/index.astro", void 0);

const $$file = "F:/1 Cuatrimestre 2024/Progra III/pokedexapps-2/server/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
