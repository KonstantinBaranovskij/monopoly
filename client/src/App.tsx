import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Header from './components/Header'; 

function App() {
  return (
    <div>
      <Header/>

      <main style={{ padding: "1rem" }}>
        <Typography variant="h4" gutterBottom>
          Monopoly
        </Typography>
        <Button variant="contained" color="primary">
          Кнопка
        </Button>
      </main>
    </div>
  );
}

export default App;
