import React from 'react';
import  './TicTacToe.css';

function MyComponent() {
    const renderSquare = (index) => (
        <div key={index} className="grid-item"></div>
    );

    return (
        <div className="grid-container">
            {[0, 1, 2].map((row) => (
                <div key={row} className="grid-row">
                    {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
                </div>
            ))}
        </div>
    );
}

export default MyComponent;
