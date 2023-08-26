import { Button, Dialog, DialogActions, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { StyledRoot } from "./styles"
import { LoadingButton } from "@mui/lab"
import { StyledContainer } from "../StageUm/styles"

const StageTres = ({nextStage, gameData, getHit}) => {
    
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)

    const handleResult = () => {
        setLoading(false)
        if(input ==='4000') {
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
                    Minha nossa, como se escreve queijo na língua desses sujeitos?
                </Typography>
            </StyledContainer>
            <TextField
                color="secondary"
                label="Ano"
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

export default StageTres