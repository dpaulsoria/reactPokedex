import React, {useEffect} from "react";
import { Container } from "@mui/material";
import { AbilityCard } from "../components/AbilityCard";
// import { capitalize } from "../utils";
// import { getAbility } from "../services/ability";

function Abilities({array}) {  
  return (
    <Container>
      {array.map((i) => {
        return <AbilityCard name={i.name} content={i.content} />;
      })}
    </Container>
  );
}

export { Abilities };
