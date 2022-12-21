import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import Scoreboard from '@/components/Scoreboard';
import { Game, Team } from '@/types';
import gamesReducer from '@/reducers/gamesReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/components/App.scss';

const initialData: [Team, Team, number, number][] = [
    [Team.Mexico, Team.Canada, 0, 5],
    [Team.Spain, Team.Brazil, 10, 2],
    [Team.Germany, Team.France, 2, 2],
    [Team.Uruguay, Team.Italy, 6, 6],
    [Team.Argentina, Team.Australia, 3, 1]
];
const initialGames: Game[] = initialData.map(e => {
    return {
        id: uuid(), 
        homeTeam: e[0], 
        awayTeam: e[1], 
        homeScore: e[2], 
        awayScore: e[3], 
        startedAt: Date.now(),
    }
});

function App() {
    const [games, dispatch] = useReducer(gamesReducer, initialGames);

    return (
        <div className="App">
            <Scoreboard games={games} dispatch={dispatch} />
        </div>
    )
}

export default App
