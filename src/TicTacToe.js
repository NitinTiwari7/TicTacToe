





import './TicTacToe.css';
import React, { useState, useEffect } from 'react';


const TicTacToe = ({ choice }) => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({ human: 0, computer: 0, tie: 0 });

  useEffect(() => {
    const storedScore = JSON.parse(localStorage.getItem('ticTacToeScore')) || { human: 0, computer: 0, tie: 0 };
    setScore(storedScore);
  }, []);

  useEffect(() => {
    if (winner) {
      const newScore = { ...score };
      if (winner === 'X') {
        newScore.human += 1;
      } else if (winner === 'O') {
        newScore.computer += 1;
      } else if (winner === 'tie') {
        newScore.tie += 1;
      }
      setScore(newScore);
      localStorage.setItem('ticTacToeScore', JSON.stringify(newScore));
    }
  }, [winner]);

  useEffect(() => {
    if (!xIsNext) {
      const computerMoveTimeout = setTimeout(() => makeComputerMove(), 500);
      return () => clearTimeout(computerMoveTimeout);
    }
  }, [xIsNext]);

  const handleClick = (index) => {
    if (winner || board[index]) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = choice ? 'X' : 'O'; // Human player always plays 'X'

    setBoard(newBoard);
    setXIsNext(!xIsNext);
    setWinner(calculateWinner(newBoard));
  };

  const makeComputerMove = () => {
    if (winner || board.every((square) => square !== null)) {
      return;
    }

    const availableMoves = board
      .map((square, index) => (square === null ? index : null))
      .filter((move) => move !== null);

    // Check if computer can win in the next move
    for (let i = 0; i < availableMoves.length; i++) {
      const testMove = availableMoves[i];
      const testBoard = [...board];
      testBoard[testMove] = 'O';
      if (calculateWinner(testBoard) === 'O') {
        newMove(testMove);
        return;
      }
    }

    // Check if human can win in the next move and block it
    for (let i = 0; i < availableMoves.length; i++) {
      const testMove = availableMoves[i];
      const testBoard = [...board];
      testBoard[testMove] = 'X';
      if (calculateWinner(testBoard) === 'X') {
        newMove(testMove);
        return;
      }
    }

    // If no winning move, make a random move
    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    newMove(availableMoves[randomIndex]);
  };

  const newMove = (index) => {
    const newBoard = [...board];
    newBoard[index] = !choice ? 'X' : 'O';

    setBoard(newBoard);
    setXIsNext(!xIsNext);
    setWinner(calculateWinner(newBoard));
  };




  const handleRefresh = () => {
    // Display a popup with Play Again and Quit options
    const playAgain = window.confirm('Do you want to quit ?');
    if (playAgain) {
      setBoard(initialBoard);
      setXIsNext(true);
      setWinner(null);
    } else {
     
      setScore({ human: 0, computer: 0, tie: 0 });
      localStorage.setItem('ticTacToeScore', JSON.stringify({ human: 0, computer: 0, tie: 0 }));
      
    }
  };



  const renderSquare = (index) => {
    const squareValue = board[index];

    // Define styles for "X" and "O"

    const xStyle = {
      color:  '#32C4C3',

    };

    const oStyle = {
      color: '#F7B336',
     

    };

    return (
      <button
        className="square"
        onClick={() => handleClick(index)}
        style={squareValue === 'X' ? xStyle : squareValue === 'O' ? oStyle : {}}
      >
        {squareValue}
      </button>
    );
  };

 
  

  const currentPlayer = xIsNext ? 'X' : 'O';

  const status = winner
    ? `Winner: ${winner}`
    : board.every((square) => square !== null)
    ? "It's a draw!"
    : ` ${currentPlayer} Turn`;

   
   

  return (
    
    <div>

<div className='img'>
  <img src="./Icons/circle.png" alt="Loading..."  />
  <img src="./Icons/cross.png" alt="Loading..."  />
  </div>
      
<div className='turn'>
 
  <div className="status"> {status}</div>
</div>

      <div className="board  " >
       
 

<div  class="grid-container" >
    
         <div class="grid-item">{renderSquare(0)}</div>
         <div class="grid-item">{renderSquare(1)}</div>
         <div class="grid-item">{renderSquare(2)}</div>
         <div class="grid-item">{renderSquare(3)}</div>
        <div class="grid-item">{renderSquare(4)}</div>
         <div class="grid-item">{renderSquare(5)}</div>
         <div class="grid-item">{renderSquare(6)}</div>
         <div class="grid-item">{renderSquare(7)}</div>
         <div class="grid-item" >{renderSquare(8)} </div>
         
    </div>



      </div>
      <div className="score">
        <p className='humanScore'>X (YOU) {score.human}</p>
        <p className='computerScore'>O (CPU) {score.computer}</p>
        <p className='tieScore'>TIES {score.tie}</p>
      </div>
      <div className='refresh'>
      <button  onClick={handleRefresh}><img src="./Icons/refreshIcon.png" alt="Loading..."  /></button>
      
      </div>
      
      <div>{choice}</div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

 



  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return squares.every((square) => square !== null) ? "tie" : null;
};



export default TicTacToe;




















