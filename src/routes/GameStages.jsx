import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { StyledRoot } from "../styles/styles";
import { Context } from "../App";
import StageUm from "../components/StageUm";
import StageDois from "../components/StageDois";
import StageTres from "../components/StageTres";
import StageQuatro from "../components/StageQuatro";
import StageCinco from "../components/StageCinco";
import StageSeis from "../components/StageSeis";
import { StyledContainer } from "../components/StageUm/styles";
import { Typography } from "@mui/material";


const GameStages = () => {

  const {id} = useParams()
  const navigate = useNavigate()

  const {setGameData, gameData} = useContext(Context);

  const getHit = () => {
    setGameData( {...gameData, life: {
      ...gameData.life, currentLife: gameData.life.currentLife -1
    }})
  }


  const nextStage = () => {
    setGameData( {...gameData, stage: gameData.stage +1})

    navigate(`/game/${gameData.stage +1}`)
  }

  const renderRigthStage = (id) => {
    switch(id) {
      case '1':
        return <StageUm nextStage={nextStage} gameData={gameData} getHit={getHit} />
        
      case '2':
        return <StageDois nextStage={nextStage} gameData={gameData} getHit={getHit} />

      case '3':
        return <StageTres nextStage={nextStage} gameData={gameData} getHit={getHit} />

      case '4':
        return <StageQuatro nextStage={nextStage} gameData={gameData} getHit={getHit} />

      case '5':
        return <StageCinco nextStage={nextStage} gameData={gameData} getHit={getHit} />

      case '6':
        return <StageSeis nextStage={nextStage} gameData={gameData} getHit={getHit} />

      default:
        return <StyledContainer>
        <Typography sx={{marginBottom: '16px'}}>
            As vezes estou triste e as vezes contente, dentro de mim está seu presente yaaaaaaaaaaaaaaay <br/> Parabensssss <br/> 💓 💕 💖 💗 💞 💘 
        </Typography>
        <img src={'https://media.tenor.com/-spL2ztCyLcAAAAM/dance-cat.gif'} alt={'gato da reivii'} />
    </StyledContainer>
    }
  }
 
  return (

    <StyledRoot>
      {renderRigthStage(id)}       
    </StyledRoot>
  )
    
}

export default GameStages