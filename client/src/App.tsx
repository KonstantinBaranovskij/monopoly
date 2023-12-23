import React from 'react';
import Typography from '@mui/material/Typography';
import Header from './components/Header'; 
import MonopolyGrid from './components/MonopolyBoard';

const profiles = [
  {
    id: 1,
    avatar: 'https://example.com/avatar1.jpg',
    nickname: 'User1',
    balance: 1000,
  },
  {
    id: 2,
    avatar: 'https://example.com/avatar2.jpg',
    nickname: 'User2',
    balance: 2000,
  },
  // Добавьте другие профили по аналогии
];

function App() {
  return (
    <div>
      <Header/>
      <main style={{ padding: "1rem" }}>
        <Typography variant="h4" gutterBottom>
          Monopoly
        </Typography>
      </main>
      <MonopolyGrid/>
    </div>
  );
}

export default App;