import { React } from "react";
import Items from "../ItemComponent/ItemComponent";

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
const ItemListComponent = (props) => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                padding: "0px",
                margin: "10px",
            }}
        >
            {props.products.map((item) => (
                <Items
                    item={item}
                    setCart={props.setCart}
                    cart={props.cart}
                    key={item.id}
                />
            ))}
        </div>
    );
};
export default ItemListComponent;
