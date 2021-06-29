import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
//import ItemDetailComponent from "../ItemDetailComponent/ItemDetailComponent";
//import ItemCount from "../ItemCount/ItemCount";
import ItemDetailContainer from "../../Containers/ItemDetailContainer";

const ItemComponent = (props) => {
    const [articulos, setArticulos] = useState(0);

    console.log(props.item);

    const addItem = () => {
        if (articulos < props.item.stock) {
            setArticulos(articulos + 1);
            props.setCart(props.cart + 1); //aca guardo el numero de articulos
        } else alert("NO HAY MAS!");
        console.log(articulos);
    };
    //PASAR CART HASTA ACA Y HACER CART + 1
    const deleteItem = () => {
        if (articulos > 0) {
            setArticulos(articulos - 1);
            props.setCart(props.cart - 1);
        }
        console.log(articulos);
    };

    return (
        <div style={{ marginTop: "20px", display: "flex" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                }}
            >
                <Card style={{ width: "16rem", height: "31rem" }}>
                    <Card.Img
                        variant="top"
                        src={"/images/" + props.item.image}
                        alt="aros"
                    />
                    <Card.Body
                        style={{ display: "flex", flexDirection: "column" }}
                    >
                        <ItemDetailContainer itemId={props.item.id} />
                        <Card.Text
                            style={{ margin: "1px", textAlign: "center" }}
                        >
                            ${props.item.price}
                        </Card.Text>

                        <div style={{ display: "flex" }}>
                            <Button
                                variant="primary"
                                onClick={addItem}
                                style={{ margin: "10px", width: "50%" }}
                            >
                                Comprar
                            </Button>
                            <Button
                                variant="primary"
                                onClick={deleteItem}
                                style={{ margin: "10px", width: "50%" }}
                            >
                                Eliminar
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};
export default ItemComponent;
