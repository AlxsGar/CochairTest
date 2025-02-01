import { Card, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";

function PlanetCard({ planet }) {
  return (
    <Grid2 xs={2} sm={2} md={1} item>
      <Card style={{ padding: 32}} key={planet.name}>
        <Typography variant="h3" color="primary" align="center">
          {planet.name}
        </Typography>

        <Typography>Diameter: {planet.diameter}</Typography>
        <Typography>Climate: {planet.climate}</Typography>
        <Typography>Terrain(s): {planet.terrain}</Typography>
        <Typography>Population: {planet.population}</Typography>
      </Card>
    </Grid2>
  );
}

export default PlanetCard;
