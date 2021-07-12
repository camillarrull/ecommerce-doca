import { React, useState, useEffect } from "react";
import ItemDetailComponent from "../componentes/ItemDetailComponent/ItemDetailComponent";
import { useParams } from "react-router-dom";

const ItemDetailContainer = (props) => {
    const { product_id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch("/json/productos.json")
            .then((res) => res.json())
            .then((data) => {
                data.forEach((elem) => {
                    if (elem.product_id === parseInt(product_id)) {
                        setItem(elem);
                    }
                });
            });
    }, [product_id]);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            {item.status === 400 ? (
                <p>Item no encontrado</p>
            ) : (
                <ItemDetailComponent
                    item={item}
                    setCart={props.setCart}
                    cart={props.cart}
                />
            )}
        </div>
    );
};
export default ItemDetailContainer;
