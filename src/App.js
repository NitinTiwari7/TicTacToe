// import Board from './Board';
import { useState } from 'react';
import './App.css';
import FirstPage from './FirstPage';
import TicTacToe from './TicTacToe';



function App() {
  const[choice,setChoice]=useState()
  const[newGame,setNewGame]=useState(false);
  return (
    <div className="App">

 { newGame? (<TicTacToe choice={choice} />) : (<FirstPage choice={choice} setChoice={setChoice} setNewGame={setNewGame}/>) }
    
    </div>
  );
}

export default App;



