import React from "react";
import { Container } from "@mui/material";
import { AbilityCard } from "../components/AbilityCard";
// import { capitalize } from "../utils";
// import { getAbility } from "../services/ability";

function Abilities() {
  let array = JSON.parse(localStorage.getItem("dsoria.abilities"));
  return (
    <Container>
      {array.map((i) => (
        <AbilityCard name={i.name} content={i.content} />
      ))}
    </Container>
  );
}

export { Abilities };
