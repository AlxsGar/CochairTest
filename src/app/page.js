"use client";

import { Typography } from "@mui/material";
import styled from "styled-components";
import useStarWars from "../hooks/useStarWars";
import { useEffect } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import PlanetCard from "../components/cards/PlanetCard";

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: white;
  padding: 2rem;
`;

const Beers = () => {
  const { fetchStarWarsPlanets, swList, error, errorMessage, loading } =
    useStarWars();

  useEffect(() => {
    fetchStarWarsPlanets();
  }, []);

  return (
    <MainContainer>
      {loading && (
        <Typography variant="h1" color="primary" align="center">
          ...Loading
        </Typography>
      )}
      {!loading && error && (
        <Typography variant="h1" color="primary" align="center">
          {errorMessage}
        </Typography>
      )}
      {!loading && swList && (
        <Grid2 container spacing={5} columns={2}>
          {swList.map((planet) => {
            return <PlanetCard planet={planet} />;
          })}
        </Grid2>
      )}
    </MainContainer>
  );
};

export default Beers;
