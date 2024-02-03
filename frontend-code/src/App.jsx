import { useState } from 'react'
import './App.css'

import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

      </div>
      <h1>NBA Analysis Dashboard</h1>
      <h3>Please use this dashboard to investigate how NBA teams are built</h3>
      <div className="card">
        <ButtonGroup variant='text' aria-label='text button group'>
          <Button variant='contained'>
            Salaries vs Production
          </Button>
          <Button variant='contained'>
            Salaries vs Age
          </Button>
          <Button variant='contained'>
            Production by Player
          </Button>
        </ButtonGroup>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="credit">
        Created by William Reinhold
      </p>
    </>
  )
}

export default App

{/* <ButtonGroup variant="text" aria-label="text button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup> */}