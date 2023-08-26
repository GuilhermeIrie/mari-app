import { keyframes, styled } from "@mui/material";
import { Link } from "react-router-dom";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledRoot = styled('div')(() => ({  
    display: 'flex',
    width: '250px',
    alignItems: 'center',
    animation: `${fadeIn} 2s`,
    justifyContent: 'center',
    flexDirection: 'column',
  }));
  
  export const StyledContainer = styled('div')(() => ({  
    display: 'flex',
    alignItems: 'center',
    width: 'calc(100% - 32px)',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '16px',
    border: '1px solid #fb6f92',
    borderRadius: '4px',
    backgroundColor: '#fceef2',
    marginBottom: '16px'
  }));
  

