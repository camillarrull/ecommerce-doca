import { React } from "react";
import { Card, Button } from "react-bootstrap";

// ESTO ES DESTRUCTURACION DE OBJETO. SERIA LO MISMO QUE HACER
//const CardComponent = (props)=>{
/* return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.productData.image} alt='aros' />
        <Card.Body>
            <Card.Title>{props.productData.name}</Card.Title>
            <Card.Text>
                {props.productData.price}
            </Card.Text>
            <Button variant="primary">Comprar</Button>
        </Card.Body>
    </Card>
)
}
 */
const ItemListComponent = ({ productData }) => {
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={"/images/" + productData.image}
                    alt="aros"
                />
                <Card.Body>
                    <Card.Title>{productData.name}</Card.Title>
                    <Card.Text>{productData.price}</Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </div>
    );
};
export default ItemListComponent;
