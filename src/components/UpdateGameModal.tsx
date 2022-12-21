import { useState } from 'react';
import { Alert, Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { Game} from '@/types';
import '@/styles/components/UpdateGameModal.scss';

type Props = {
    game: Game;
    onHide: () => void;
    onFinish: () => void;
    onUpdate: (id: string, homeScore: number, awayScore: number) => void;
};

export default function UpdateGameModal({ game, onHide, onFinish, onUpdate }: Props) {
    const [homeScore, setHomeScore] = useState(game.homeScore);
    const [awayScore, setAwayScore] = useState(game.awayScore);
    const [error, setError] = useState('');

    function handleUpdate() {
        if (homeScore < 0 || awayScore < 0) {
            setError('The score cannot be negative');
            return;
        }
        
        if (!Number.isInteger(homeScore) || !Number.isInteger(awayScore)) {
            setError('The score must be an integer');
            return;
        }

        if (homeScore < game.homeScore || awayScore < game.awayScore) {
            setError(
                `The score cannot be updated to a lower value. \n` + 
                `Current score: ${game.homeTeam} ${game.homeScore} - ${game.awayScore} ${game.awayTeam}`
            );
            return;
        }

        onUpdate(game.id, homeScore, awayScore);
        onHide();
    }

    return (
        <Modal className='update-game-modal' show onHide={onHide} centered animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Finish the game or update the score</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                <Row>
                    <Col sm={6}>
                        <Form.Group>
                            <Form.Label>{game.homeTeam}</Form.Label>
                            <Form.Control type="number" defaultValue={game.homeScore} onChange={e => setHomeScore(+e.target.value)} />
                        </Form.Group>
                    </Col>
                    
                    <Col sm={6}>
                        <Form.Group>
                            <Form.Label>{game.awayTeam}</Form.Label>
                            <Form.Control type="number" defaultValue={game.awayScore} onChange={e => setAwayScore(+e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
            </Modal.Body>
            
            <Modal.Footer>
                <Button className='cancel-button' variant="outline-danger" onClick={onHide}>Cancel</Button>
                <Button variant="outline-primary" onClick={onFinish}>Finish</Button>
                <Button variant="primary" onClick={() => handleUpdate()}>Update</Button>
            </Modal.Footer>
        </Modal>
    );
}