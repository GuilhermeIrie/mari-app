import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import './styles/App.css';
import { createContext, useEffect, useState } from 'react';
import { Home as HomeIcon } from '@mui/icons-material';
import { Button, IconButton, Snackbar, Typography } from '@mui/material';
import { StyledDialog, StyledDialogTitle, StyledDialogActions } from './styles/styles';

export const Context = createContext();

const App = () => {
const resetGameData = { life: {currentLife: 5,maxLife: 5}, stage: 1 }
const {id} = useParams()
  const [gameData, setGameData] = useState(
    JSON.parse(
          localStorage.getItem('gameData') || '{"life":{"currentLife": 5,"maxLife": 5},"stage":1}'
        )
  )
  const [openHomeDialog, setOpenHomeDialog] = useState(false);
  const [openGameOverDialog, setOpenGameOverDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const navigate = useNavigate();
  const isHome = window.location.pathname === '/'

  const handleClickOpenDialog = () => {
    setOpenHomeDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenHomeDialog(false);
   
  };

  const handleExit = () => {
    setOpenHomeDialog(false);
    setOpenGameOverDialog(false);
    setGameData(resetGameData);
    navigate('/'); 
  };

  const onClose = () => {
    setOpenHomeDialog(false);
    setOpenGameOverDialog(false);
  }

  const handleCloseSnackbar = (_e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };
    
  useEffect(()=> {
    
    if( !!id && Number(gameData.stage) !== Number(id)) {
      navigate('/')
      setOpenSnackbar(true)
      
    }
    localStorage.setItem('gameData', JSON.stringify(gameData));
    if(gameData.life.currentLife === 0) {
      setOpenGameOverDialog(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[gameData])
  

  return (
    <Context.Provider value={{ gameData, setGameData }}>
      <div className="App">
        <div className='healthbarContainer'>
          <div className='hearthContainer'>
            {Array.from(Array(gameData.life.maxLife).keys()).map((item)=>{
              return (<img key={item} style={gameData.life.currentLife >= item +1 ?{width: '24px', height: '24px'}: {width: '24px', height: '24px', filter: 'grayscale(1)'}} src={'https://img1.picmix.com/output/stamp/normal/8/2/7/4/1754728_6d35b.gif'} alt={'hearth'}/>)
            })}
          </div>
        </div>
        <div className='contentWrapper'>
        
          <Outlet/>
        </div>
        <div className='footer'>
          {
            !isHome ?  (
              <IconButton onClick={handleClickOpenDialog}>
                <HomeIcon sx={{color: '#fb6f92'}} />
              </IconButton>
            ) :
            <div>‧͙⁺˚*･༓☾ 💖 ☽༓･*˚⁺‧͙</div>
          }
            
        </div>
        <StyledDialog
          open={openHomeDialog}
          onClose={onClose}
        >
          
          <StyledDialogTitle>
            Voltar para a tela inicial?            
          </StyledDialogTitle>
           <img style={{width: '100px', height: '100px'}} src={'https://media.tenor.com/ABeVmJ3y2WQAAAAM/cat-dancing-meme-dancing.gif'} alt={'gato serelepe'}/>
          <StyledDialogActions>
            <Button sx={{ color: '#fceef2'}}  onClick={handleCloseDialog}>Não</Button>
            <Link to='/' >
              <Button sx={{ color: '#fceef2'}}  onClick={handleExit}>            
                Sim
              </Button>
            </Link>
          </StyledDialogActions>
        </StyledDialog>
        <StyledDialog
          open={openGameOverDialog}
          onClose={handleExit}
        >
          <StyledDialogTitle>
            Você morreu!
          </StyledDialogTitle>
          <Typography sx={{ color: '#fceef2', marginBottom: '16px'}} >Fase: {gameData.stage}</Typography>
          <img style={{width: '100px', height: '100px'}} src={'https://media.tenor.com/Yo7vX42I1yQAAAAM/dead-chat-sad-cat.gif'} alt={'gato chorandinhoo'}/>
          
          <StyledDialogActions sx={{justifyContent: 'space-evenly'}}>
            <Link to='/' >
              <Button sx={{ color: '#fceef2'}}  onClick={handleExit}>            
                Continuar
              </Button>
            </Link>
          </StyledDialogActions>
        </StyledDialog>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
          message="Ta tantando roubar? 🤨"
        />
      </div>
    </Context.Provider>
  );
}

export default App;
