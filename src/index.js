import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Game from './routes/Game';
import App from './App';
import GameStages from './routes/GameStages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [      
        {
          path: '/',
          element: <Game />
        },         
        {
          path: '/game/:id',
          element: <GameStages />       
        }      
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <RouterProvider router={router} />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
