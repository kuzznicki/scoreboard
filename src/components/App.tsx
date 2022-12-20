import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Scoreboard from '@/components/Scoreboard';
import { Game, Team } from '@/types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/components/App.scss';

const initialGames: Game[] = [
    { id: uuid(), homeTeam: Team.Mexico, awayTeam: Team.Canada, homeScore: 0, awayScore: 5 },
    { id: uuid(), homeTeam: Team.Spain, awayTeam: Team.Brazil, homeScore: 10, awayScore: 2 },
    { id: uuid(), homeTeam: Team.Germany, awayTeam: Team.France, homeScore: 2, awayScore: 2 },
    { id: uuid(), homeTeam: Team.Uruguay, awayTeam: Team.Italy, homeScore: 6, awayScore: 6 },
    { id: uuid(), homeTeam: Team.Argentina, awayTeam: Team.Australia, homeScore: 3, awayScore: 1 }
];

function App() {
    const [games, setGames] = useState(initialGames);

    return (
        <div className="App">
            <Scoreboard games={games}/>
        </div>
    )
}

export default App
