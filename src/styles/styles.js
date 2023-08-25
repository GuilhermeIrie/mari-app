import { Dialog, DialogActions, DialogTitle, keyframes, styled } from "@mui/material";
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
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '16px',
  justifyContent: 'center',
  flexDirection: 'column',
  backgroundRepeat: 'no-repeat',
  animation: `${fadeIn} 1s`,
  backgroundSize: 'cover',
  backgroundImage: `url(${'https://media.tenor.com/CfZtsGFuEpUAAAAM/pink-sky-stars.gif'})`
}));

export const StyledLink = styled(Link)(() => ({
  color: '#fceef2',
  backgroundColor: '#ffc2d1',
  border: '1px solid #fb6f92',
  padding: '8px 24px',
  borderRadius: '4px',
  textDecoration: 'none', 
}));

export const StyledDialog = styled(Dialog)(() => ({  
  '& .MuiDialog-paper':{
    backgroundColor: '#ffc2d1',
    border: '1px solid #fb6f92',
    width: '275px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
}));

export const StyledDialogTitle = styled(DialogTitle)(() => ({
   color: '#fb6f92',
}));

export const StyledDialogActions = styled(DialogActions)(() => ({
  justifyContent: 'space-evenly', 
  borderBottom: '2px solid #fb6f92',
  width: '100%'
}));
