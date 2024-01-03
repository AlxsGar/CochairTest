"use client";

import { Button, Typography } from "@mui/material";
import styled from "styled-components";

const getData = async () => {
  const response = await fetch("https://api.punkapi.com/v2/beers");
  const data = await response.json();
  console.log(data);
  return data;
};

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
`;

const Beers = () => {
  return (
    <MainContainer>
      <Typography variant="h1" color="primary" align={"center"}>
        Welcome to your techincal assesment
      </Typography>
      <Typography variant="body" color="white">
        {`You can find instructions on the README.md file. This button will print in the console the data from the API, only keep
        the code if you need it. `}
      </Typography>
      <Button variant="contained" color="primary" onClick={getData}>
        Click to print values
      </Button>
      <Typography variant="body" color="white">
        Good luck!
      </Typography>
    </MainContainer>
  );
};

export default Beers;
