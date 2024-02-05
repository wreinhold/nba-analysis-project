// Import list
import { useState } from 'react';
import './App.css';
import playerData from './assets/player_info.json';
import teamData from './assets/team_sums.json';

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { PieChart, Pie, ScatterChart, Scatter, Rectangle, BarChart, Bar, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Setting up App to call in main.jsx
function App() {
  
  // Creating variables to load in
  const [stat, setStat] = useState('PTS');
  const [team, setTeam] = useState('ATL');
  const [data, setData] = useState([]);
  const [pData, setPlayerData] = useState([]);

  // Check to make sure data is loading properly
  console.log('Player Data After const:', pData);

  // Setting change events to update the stats and teams selected
  const statChange = (event) => {
    setStat(event.target.value);
  };

  const teamChange = (event) => {
    setTeam(event.target.value);
  };

  const handleFetchData = () => {
    // Filter the data based on selected values of stat and team
    const filteredData = teamData.filter(item => item.Team === team);
    const filteredPlayer = playerData.filter(item => item.Team === team);
    console.log('Team:', team);
    console.log('Filtered Data:', filteredPlayer);
    setData(filteredData);
    setPlayerData(filteredPlayer);
  };
  
  return (
    <div>
      {/* HTML code to fill out the page */}
      <h1>NBA Analysis Dashboard</h1>
      <h3>Please use this dashboard to investigate how NBA teams are built</h3>
      <div>
        {/* Creates a dropdown for statistics */}
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Statistic</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={stat}
            onChange={statChange}
            label="Statistic"
          >
            <MenuItem value="PTS">Points</MenuItem>
            <MenuItem value="TRB">Total Rebounds</MenuItem>
            <MenuItem value="AST">Assists</MenuItem>
            <MenuItem value="STL">Steals</MenuItem>
            <MenuItem value="BLK">Blocks</MenuItem>
            <MenuItem value="TOV">Turnovers</MenuItem>
          </Select>
        </FormControl>
        {/* Creates a dropdown for NBA teams */}
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Team</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={team}
            onChange={teamChange}
          >
            <MenuItem value="ATL"><em>Atlanta Hawks</em></MenuItem>
            <MenuItem value='BOS'>Boston Celtics</MenuItem>
            <MenuItem value='BRK'>Brooklyn Nets</MenuItem>
            <MenuItem value='CHO'>Charlotte Hornets</MenuItem>
            <MenuItem value='CHI'>Chicago Bulls</MenuItem>
            <MenuItem value='CLE'>Cleveland Cavaliers</MenuItem>
            <MenuItem value='DAL'>Dallas Mavericks</MenuItem>
            <MenuItem value='DEN'>Denver Nuggets</MenuItem>
            <MenuItem value='DET'>Detroit Pistons</MenuItem>
            <MenuItem value='GSW'>Golden State Warriors</MenuItem>
            <MenuItem value='HOU'>Houston Rockets</MenuItem>
            <MenuItem value='IND'>Indiana Pacers</MenuItem>
            <MenuItem value='LAC'>LA Clippers</MenuItem>
            <MenuItem value='LAL'>LA Lakers</MenuItem>
            <MenuItem value='MEM'>Memphis Grizzlies</MenuItem>
            <MenuItem value='MIA'>Miami Heat</MenuItem>
            <MenuItem value='MIL'>Milwaukee Bucks</MenuItem>
            <MenuItem value='MIN'>Minnesota Timberwolves</MenuItem>
            <MenuItem value='NOP'>New Orleans Pelicans</MenuItem>
            <MenuItem value='NYK'>New York Knicks</MenuItem>
            <MenuItem value='OKC'>Oklahoma City Thunder</MenuItem>
            <MenuItem value='ORL'>Orlando Magic</MenuItem>
            <MenuItem value='PHI'>Philadelphia 76ers</MenuItem>
            <MenuItem value='PHX'>Phoenix Suns</MenuItem>
            <MenuItem value='POR'>Portland Trail Blazers</MenuItem>
            <MenuItem value='SAC'>Sacramento Kings</MenuItem>
            <MenuItem value='SAS'>San Antonio Spurs</MenuItem>
            <MenuItem value='TOR'>Toronto Raptors</MenuItem>
            <MenuItem value='UTA'>Utah Jazz</MenuItem>
            <MenuItem value='WAS'>Washington Wizards</MenuItem>
          </Select>
        </FormControl>
        {/* Button to get the new data */}
        <button onClick={handleFetchData}>Fetch Data</button>
      </div>
      <div>
        <p>Performance vs Salary by Position</p>
        {/* Creates a bar chart with the relevant data */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Position" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId='left' dataKey="Salary" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar yAxisId="right" dataKey={stat} fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div>
        <p>Performance vs Age by Player</p>
        {/* Creates a scatter plot */}
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 30,
            }}
          >
            <CartesianGrid />
            <YAxis type="number" dataKey={stat} name={stat} unit=" per game" />
            <ZAxis type="string" dataKey="Player Name" name="name" />
            <XAxis type="number" dataKey="Age"  range={[18, 42]} name="age" unit=" yrs old" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="Age vs Stat Individual" data={pData} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <div>
        <p>Breakdown of Team Performance</p>
        {/* Creates a Pie Chart */}
        <PieChart width={400} height={400}>
          <Pie
            dataKey={stat}
            isAnimationActive={false}
            data={pData}
            cx="50%"
            cy="50%"
            outerRadius={160}
            fill="#8884d8"
            label
            nameKey="Player Name"
          />
          <Tooltip />
        </PieChart>
      </div>
    <p>This data is for the 2022-2023 NBA Season</p>
    <p>Dashboard created by William Reinhold</p>
    </div>
  );
}

export default App
