import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemComponent = (props) => {
    const [articulos, setArticulos] = useState(0);

    const addItem = () => {
        if (articulos < props.item.stock) {
            setArticulos(articulos + 1);
            props.setCart(props.cart + 1); //aca guardo el numero de articulos
        } else alert("NO HAY MAS!");
    };
    //PASAR CART HASTA ACA Y HACER CART + 1
    const deleteItem = () => {
        if (articulos > 0) {
            setArticulos(articulos - 1);
            props.setCart(props.cart - 1);
        }
    };

    return (
        <div style={{ margin: "20px", display: "flex", width: "20%" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    //margin: "10%",
                    //justifyContent: "space-around",
                }}
            >
                <Card style={{ width: "16rem", height: "31rem" }}>
                    <Link to={"/productos/" + props.item.product_id}>
                        <Card.Img
                            variant="top"
                            src={"/images/" + props.item.image}
                            alt="aros"
                        />
                    </Link>
                    <Card.Body
                        style={{ display: "flex", flexDirection: "column" }}
                    >
                        <Card.Text
                            style={{ margin: "1px", textAlign: "center" }}
                        >
                            ${props.item.price}
                        </Card.Text>

                        <div style={{ display: "flex" }}>
                            <Button
                                variant="primary"
                                onClick={addItem}
                                style={{
                                    margin: "10px",
                                    width: "50%",
                                    backgroundColor: "#a69f91",
                                    borderColor: "#a69f91",
                                    marginTop: "20%",
                                }}
                            >
                                Comprar
                            </Button>
                            <Button
                                variant="primary"
                                onClick={deleteItem}
                                style={{
                                    margin: "10px",
                                    width: "50%",
                                    backgroundColor: "#a69f91",
                                    borderColor: "#a69f91",
                                    marginTop: "20%",
                                }}
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
