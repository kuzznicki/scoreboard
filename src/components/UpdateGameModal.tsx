import { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { Game} from '@/types';
import '@/styles/components/UpdateGameModal.scss';

type Props = {
    game: Game | null;
    onHide: () => void;
    onFinish: () => void;
    onUpdate: (updatedGame: Game) => void;
};

export default function UpdateGameModal({ game, onHide, onFinish, onUpdate }: Props) {
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);

    if (!game) return null;

    return (
        <Modal className='update-game-modal' show onHide={onHide} centered animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Finish the game or update the score</Modal.Title>
            </Modal.Header>

            <Modal.Body>
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
                <Button variant="primary" onClick={() => onUpdate({ ...game, homeScore, awayScore })}>Update</Button>
            </Modal.Footer>
        </Modal>
    );
}