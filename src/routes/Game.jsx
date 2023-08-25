import React, { useContext } from "react";
import { StyledRoot, StyledLink } from "../styles/styles";
import { Typography } from "@mui/material";
import { Context } from "../App";

const Game = () => { 
  const {gameData} = useContext(Context);
  return (    
    <StyledRoot >          
      <StyledLink to={`/game/${gameData.stage}`}>
        <Typography fontWeight={800} variant="h5">🌷 Play 🌷</Typography>
      </StyledLink>
    </StyledRoot>    
  )
    
}

export default Game