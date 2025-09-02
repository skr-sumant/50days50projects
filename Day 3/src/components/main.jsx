import React, { useState } from 'react';
import './assets/main.css';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      <h1>Counter App</h1>

      <div className='counter-container'>
        <h1>{count}</h1>
        <div className='button-container'>
          <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
            <Button 
              onClick={() => setCount(count + 1)} 
              variant="contained" 
              color="success" 
              startIcon={<SendIcon />}
            >
              Increment
            </Button>

            <Button 
              onClick={() => setCount(count - 1)} 
              variant="contained" 
              color="error" 
              endIcon={<SendIcon />}
            >
              Decrement
            </Button>

            <Button 
              onClick={() => setCount(0)} 
              variant="contained"
              sx={{ backgroundColor: "#d5181eff", "&:hover": { backgroundColor: "#ff0011ff" } }} 
              startIcon={<DeleteIcon />}
            >
              Reset
            </Button>
          </Stack>
        </div>
      </div>
      <div className='footer'>
        <p>Developed by <a href="https://github.com/skr-sumant/" target="_blank" rel="noreferrer">Sumant Kumar</a></p>
        </div>
        
    </div>
  );
}
