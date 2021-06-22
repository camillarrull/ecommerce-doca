import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

function useProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("json/productos.json")
            .then((response) => response.json())
            .then((datos) => {
                setProducts(datos);
            });
    }, []);

    return products;
}

const Items = ({ addItem, deleteItem }) => {
    const products = useProducts();

    return (
        <div style={{ marginTop: "20px" }}>
            <h4
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "15px",
                }}
            >
                Lista de Productos
            </h4>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                }}
            >
                {products.map((item) => (
                    <Card style={{ width: "18rem" }}>
                        <Card.Img
                            variant="top"
                            src={"/images/" + item.image}
                            alt="aros"
                        />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.price}</Card.Text>
                            <Button
                                variant="primary"
                                onClick={addItem}
                                style={{ margin: "10px" }}
                            >
                                Comprar
                            </Button>
                            <Button
                                variant="primary"
                                onClick={deleteItem}
                                style={{ margin: "10px" }}
                            >
                                Eliminar
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};
export default Items;
