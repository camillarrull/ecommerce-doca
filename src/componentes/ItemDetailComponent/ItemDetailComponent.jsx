import { React, useState } from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import ItemCountComponent from "../ItemCountComponent/ItemCountComponent";
import { Link } from "react-router-dom";

function ItemDetailComponent(props) {
    const [articulos, setArticulos] = useState(0);
    console.log(articulos);

    const addItem = () => {
        if (articulos < props.item.stock) {
            setArticulos(articulos + 1);
            props.setCart(props.cart + 1); //aca guardo el numero de articulos
        } else alert("NO HAY MAS!");
    };

    const deleteItem = () => {
        if (articulos > 0) {
            setArticulos(articulos - 1);
            props.setCart(props.cart - 1);
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <h1
                style={{
                    color: "black",
                    alignSelf: "center",
                    marginTop: "5%",
                    color: "#a69f91",
                    fontStyle: "italic",
                }}
            >
                {props.item.name}
            </h1>
            <div
                style={{
                    width: "55rem",
                    height: "32rem",
                    backgroundColor: "#efe7d6",
                    border: "solid 1px",
                    marginBottom: "5%",
                    marginTop: "5%",
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <div style={{ width: "100%", height: "100%", display: "flex" }}>
                    <div style={{ width: "50%", height: "100%" }}>
                        <img
                            src={"/images/" + props.item.image}
                            alt="aro"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>

                    <div
                        style={{
                            width: "50%",
                            height: "100%",
                            padding: "10%",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <h5>{props.item.description}</h5>
                        <p style={{ alignSelf: "center" }}>
                            Stock : {props.item.stock}
                        </p>
                        <h3 style={{ alignSelf: "center" }}>
                            {" "}
                            $ {props.item.price}
                        </h3>

                        {articulos === props.item.stock ? (
                            <Link to="/cart" replace>
                                <Button>Terminar compra</Button>
                            </Link>
                        ) : (
                            <ItemCountComponent
                                addItem={addItem}
                                deleteItem={deleteItem}
                                setCart={props.setCart}
                                cart={props.cart}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetailComponent;
