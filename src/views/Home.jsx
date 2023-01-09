import React from "react";
import { PokemonCard } from "../components/PokemonCard";
import { Container } from "@mui/material";
import { capitalize } from "../utils";
import { getImages, getTypes } from "../services/pokemon";

function Home() {
  const validatePokemon = () => {
    const pokemon = JSON.parse(localStorage.getItem("dsoria.pokemon"));
    return pokemon ? pokemon : {};
  };
  let pokemon = validatePokemon();

  return (
    <Container>
      <PokemonCard
        name={capitalize(pokemon.name)}
        imgUrl={getImages(pokemon)}
        types={getTypes(pokemon)}
      />
    </Container>
  );
}

export { Home };
