import React, { useEffect, useRef } from 'react';
import { Grid } from '@mui/material';

const MonopolyGrid = () => {
  const gridSize = 11;
  const containerRef = useRef(null);

  const cellData = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
    // Добавьте пути к остальным картинкам для каждой ячейки
  ];
  return (
    <div ref={containerRef} style={{ width: '100%', overflow: 'auto' }}>
      <Grid container spacing={0} justifyContent="center" style={{ maxWidth: '100%', overflow: 'auto', minWidth: `${gridSize * 50}px`, minHeight: `${gridSize * 50}px` }}>
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
      </Grid>
    </div>
  );
};

export default MonopolyGrid;