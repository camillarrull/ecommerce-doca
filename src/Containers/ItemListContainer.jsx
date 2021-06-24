import { React, useState, useEffect } from "react";
import ItemListComponent from "../componentes/ItemListComponent/ItemListComponent";

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("json/productos.json")
            .then((response) => response.json())
            .then((datos) => {
                setTimeout(() => {
                    setProducts(datos);
                }, 2000);
            });
    }, []);

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <ItemListComponent
                products={products}
                setCart={props.setCart}
                cart={props.cart}
            />
        </div>
    );
};
export default ItemListContainer;
