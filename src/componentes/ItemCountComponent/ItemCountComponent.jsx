import React from "react";
import { Button } from "react-bootstrap";

function ItemCountComponent(props) {
    return (
        <div>
            <div style={{ display: "flex" }}>
                <Button
                    variant="primary"
                    onClick={props.addItem}
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
                    onClick={props.deleteItem}
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
        </div>
    );
}

export default ItemCountComponent;
