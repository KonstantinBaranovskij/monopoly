import React, { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import Chat from './Chat';

const MonopolyGrid = () => {
  const gridSize = 11;

  const cellData = [
    //возможность подключить дизайн полей доки Монополии
    '/path/to/image1.jpg',
    //'/path/to/image2.jpg',
    //'/path/to/image3.jpg',
  ];

  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [diceResult, setDiceResult] = useState<number | null>(null);

  const handleSendMessage = (message: string) => {
    setChatMessages((prevMessages) => [...prevMessages, message]);
  };

  const handleRollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setDiceResult(result);
  };

  return (
    <Grid container spacing={0} justifyContent="center" style={{ maxWidth: '100%', overflow: 'auto', minWidth: `${gridSize * 50}px`, minHeight: `${gridSize * 50}px` }}>

      {/* Render cells */}
      {Array.from({ length: gridSize }).map((_, rowIndex) => (
        <Grid container item xs={12} key={rowIndex} spacing={0} justifyContent="center">
          {Array.from({ length: gridSize }).map((_, columnIndex) => {
            const isEdgeCell =
              rowIndex === 0 || rowIndex === gridSize - 1 || columnIndex === 0 || columnIndex === gridSize - 1;

            if (isEdgeCell) {
              return (
                <Grid item key={columnIndex} style={{ flex: '0 0 50px', maxWidth: '50px', height: '50px' }}>
                  <img
                    src={cellData[rowIndex * gridSize + columnIndex]}
                    alt="Cell"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Grid>
              );
            }

            return (
              <Grid item key={columnIndex} style={{ flex: '0 0 50px', maxWidth: '50px', height: '50px', backgroundColor: 'white' }}></Grid>
            );
          })}
        </Grid>
      ))}

      {/* Add chat component */}
      <Grid item xs={12}>
        <Chat messages={chatMessages} />
      </Grid>

      {/* Add dice roll button */}
      <Grid item xs={12}>
        <button onClick={handleRollDice}>Roll Dice</button>
        {diceResult && <p>Dice Result: {diceResult}</p>}
      </Grid>
    </Grid>
  );
};

export default MonopolyGrid;