import Card from 'react-bootstrap/Card';
import Tags from './Tags';

export default function Mycard(props) {
    return (
        <>
            <Card style={{ width: '18rem', padding:'10px'}}>
                <Card.Img src={props.imagen} />
                <Card.Body>
                    <Card.Title>{props.nombre}</Card.Title>
                    <Card.Text>{props.descripcion}</Card.Text>
                    <Tags bg={props.color} raza={props.raza}/>
                </Card.Body>
            </Card>
        </>
    )
}