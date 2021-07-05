import { React, useState, useEffect } from "react";
import ItemListComponent from "../componentes/ItemListComponent/ItemListComponent";
import { Link } from "react-router-dom";
const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("json/productos.json")
            .then((response) => response.json())
            .then((datos) => {
                setTimeout(() => {
                    setProducts(datos);
                }, 1000);
            });
    }, []);

    return (
        <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
            <ItemListComponent
                products={products}
                setCart={props.setCart}
                cart={props.cart}
            />
            <button>
                <Link to={"/contacto"}>IR A CONTACTO</Link>
            </button>
        </div>
    );
};
export default ItemListContainer;
