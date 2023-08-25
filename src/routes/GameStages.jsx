import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { StyledRoot } from "../styles/styles";
import { Context } from "../App";


const GameStages = () => {

  const {id} = useParams()
  const {setGameData, gameData} = useContext(Context);

  const getHit = () => {
    setGameData( {...gameData, life: {
      ...gameData.life, currentLife: gameData.life.currentLife -1
    }})
  }


  const nextStage = () => {
    setGameData( {...gameData, stage: gameData.stage +1})
  }
 
    return (

        <StyledRoot>
          <button onClick={getHit}>
            tirar vida
          </button>      
        
          <p>
            Game stage: {id}
          </p>
          <Link to={`/game/${gameData.stage +1}`}>
            <button onClick={nextStage}>
              next Stage
            </button>   
          </Link>
       
      </StyledRoot>
    )
    
}

export default GameStages