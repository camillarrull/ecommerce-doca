import { React, useState, useEffect } from "react";
//import ItemDetailComponent from "../componentes/ItemDetailComponent/ItemDetailComponent";
import ArosListComponent from "../componentes/ArosComponent/ArosComponent";

const ArosContainer = (props) => {
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
            <ArosListComponent
                products={products}
                setCart={props.setCart}
                cart={props.cart}
            />
        </div>
    );
};
export default ArosContainer;
