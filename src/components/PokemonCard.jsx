import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Carousel } from "./Carousel";
import { capitalize } from "../utils";
// import { Container } from "@mui/system";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";

function PokemonCard({ name, imgUrl, types }) {
  return (
    <Card className="card box-shadow" sx={{ maxWidth: 345 }}>
      <CardContent>
        <Carousel imgs={[imgUrl[0], imgUrl[1], imgUrl[2]]} />
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <CardContent className="types" variant="body2" color="text.secondary">
          {types.map((type) => (
            <div className={`${capitalize(type)} box-shadow`}>
              {capitalize(type)}
            </div>
          ))}
        </CardContent>
      </CardContent>
    </Card>
  );
}

export { PokemonCard };
