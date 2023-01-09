import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function AbilityCard({ name, content }) {
  return (
    <Card className="card box-shadow" sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <CardContent className="types" variant="body2" color="text.secondary">
          {content}
        </CardContent>
      </CardContent>
    </Card>
  );
}

export { AbilityCard };
