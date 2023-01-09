// import { save } from "../utils";

const getAbility = async (url) => {
  try {
    const req = url;
    const res = await fetch(req, {
      method: "GET",
    });

    const json = await res.json();
    const result = json.effect_entries.filter(
      (i) => i.language.name === "en"
    )[0];

    return result.effect;
  } catch (error) {
    console.error("Getting", error);
    return undefined;
  }
};

// const getPokemon = async (name) => {
//   try {
//     const req = `${URL}/${name}`;
//     const res = await fetch(req, {
//       method: "GET",
//     });
//     console.log("making a req", req);
//     const json = await res.json();
//     console.log("fetch", json);
//     save("dsoria.pokemon", JSON.stringify(json));
//     save("dsoria.abilities", JSON.stringify(json.abilities));
//     return json;
//   } catch (error) {
//     console.error("Getting", error);
//     return undefined;
//   }
// };
export { getAbility };
