import { save, capitalize } from "../utils/";
import { getAbility } from "./ability";
const URL = "https://pokeapi.co/api/v2/pokemon";
// const URL = "https://api.github.com/users";

const getPokemon = async (name) => {
  try {
    const req = `${URL}/${name}`;
    const res = await fetch(req, {
      method: "GET",
    });
    console.log("making a req", req);
    const json = await res.json();
    console.log("fetch", json);
    save("dsoria.pokemon", JSON.stringify(json));
    save("dsoria.abilities", JSON.stringify(json.abilities));
    // let tmp = [];
    // json.abilities.map((i) =>
    //   tmp.push({
    //     name: capitalize(i.ability.name),
    //     content: getAbility(i.ability.url),
    //   })
    // );
    // if (tmp.length !== 0) save("dsoria.abilities", JSON.stringify(tmp));

    return json;
  } catch (error) {
    console.error("Getting", error);
    return undefined;
  }
};
const getImages = (pokemon) => {
  if (!pokemon.sprites) return [];
  return [
    pokemon.sprites.front_default,
    pokemon.sprites.front_female,
    pokemon.sprites.front_shiny,
  ];
};

const getTypes = (pokemon) => {
  if (!pokemon.types) return [];
  return pokemon.types.map((type) => type.type.name);
};
export { getPokemon, getImages, getTypes };
