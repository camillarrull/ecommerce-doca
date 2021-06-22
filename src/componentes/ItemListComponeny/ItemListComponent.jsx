import { React } from "react";
import Items from "../ItemComponent/Item";

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
const ItemListComponent = () => {
    return (
        <div>
            <Items />
        </div>
    );
};
export default ItemListComponent;
