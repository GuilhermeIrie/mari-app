import { TextField, Typography } from "@mui/material"
import { useState } from "react"
import { StyledRoot, StyledContainer } from "./styles"
import { LoadingButton } from "@mui/lab"

const StageUm = ({nextStage, gameData, getHit}) => {
    
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)

    const handleResult = () => {
        setLoading(false)
        if(input.toLowerCase() ==='fogo') {
            nextStage()
        } else {
            getHit()
            setInput('')
        }
    }

    const handleOnClick = () => {
        setLoading(true)
        setTimeout(handleResult, 1000)
    }

    return (
       <StyledRoot>
            <StyledContainer>
                <Typography>
                    O desaFio cOmeça Na páGina <b>16</b> do livrO wOrld Of Warcraft...
                </Typography>
            </StyledContainer>
            <TextField
                color="secondary"
                label="Elemento"
                fullWidth
                variant="outlined"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
            <LoadingButton
                loading={loading}
                sx={{marginTop: '16px'}}
                variant="contained"
                color="secondary"
                onClick={handleOnClick}
            >
                <span>Enviar</span>
            </LoadingButton>
        
             
        
     </StyledRoot>
    )
}

export default StageUm