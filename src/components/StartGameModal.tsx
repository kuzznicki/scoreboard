import { useState } from 'react';
import { Alert, Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { Game, Team } from '@/types';
import { isTeamPlaying, stringToTeam } from '@/utils';
import '@/styles/components/StartGameModal.scss';

type Props = {
    show: boolean;
    games: Game[];
    onHide: () => void;
    onGameStart: (homeTeam: Team, awayTeam: Team) => void;
}

export default function StartGameModal({ show, games, onHide, onGameStart }: Props) {
    const [homeTeam, setHomeTeam] = useState<Team | null>(null);
    const [awayTeam, setAwayTeam] = useState<Team | null>(null);
    const [error, setError] = useState('');

    function handleStart(homeTeam: Team | null, awayTeam: Team | null) {
        if (!homeTeam || !awayTeam) return;
        
        if (homeTeam === awayTeam) {
            setError('Home team and away team cannot be the same.');
            return;
        };

        for (const team of [homeTeam, awayTeam]) {
            if (isTeamPlaying(games, team)) {
                setError(`${team} is already playing a match.`);
                return;
            }
        }
            
        onGameStart(homeTeam, awayTeam);
        onHide();
    }

    return (
        <Modal className='start-game-modal' show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Start a new game</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                <Row>
                    <Col sm={6}>
                        <Form.Group>
                            <Form.Label>Home team</Form.Label>
                            <Form.Control as="select" onChange={e => {
                                setError('');
                                setHomeTeam(stringToTeam(e.target.value));
                            }}>
                                <option value="">Select a team</option>
                                {Object.values(Team).map(team => (
                                    <option key={team} value={team}>{team}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    
                    <Col sm={6}>
                        <Form.Group>
                            <Form.Label>Away team</Form.Label>
                            <Form.Control as="select" onChange={e => {
                                setError('');
                                setAwayTeam(stringToTeam(e.target.value));
                            }}>
                                <option value="">Select a team</option>
                                {Object.values(Team).map(team => (
                                    <option key={team} value={team}>{team}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
            </Modal.Body>
            
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Cancel</Button>
                <Button 
                    variant="primary" 
                    onClick={() => handleStart(homeTeam, awayTeam)}
                    disabled={!homeTeam || !awayTeam}>
                    Start
                </Button>
            </Modal.Footer>
        </Modal>
    );
}