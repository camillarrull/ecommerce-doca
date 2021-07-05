import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ItemDetailComponent({ item }) {
    /*   const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); */

    return (
        <div>
            <div style={{ width: "60%" }}>
                <img
                    variant="top"
                    src={"/images/" + item.image}
                    alt="aros"
                    style={{ display: "flex", width: "100%" }}
                />
            </div>
            <div style={{ width: "40%" }}>
                <p>Precio : ${item.price}</p>
                <p>Stock :{item.stock} unidades</p>
                <p>
                    Descripcion:
                    {item.description}
                </p>
            </div>
        </div>
        /*  <>
            <Button variant="primary" onClick={handleShow}>
                {props.item.name}
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                style={{
                    display: "flex",
                    //flexDirection: "column",
                    height: "50rem",
                }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{props.item.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ display: "flex" }}>
                    <div style={{ width: "60%" }}>
                        <img
                            variant="top"
                            src={"/images/" + props.item.image}
                            alt="aros"
                            style={{ display: "flex", width: "100%" }}
                        />
                    </div>
                    <div style={{ width: "40%" }}>
                        <p>Precio : ${props.item.price}</p>
                        <p>Stock :{props.item.stock} unidades</p>
                        <p>
                            Descripcion:
                            {props.item.description}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </> */
    );
}

export default ItemDetailComponent;
