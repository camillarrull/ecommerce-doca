import { React, useState, useEffect } from "react";
import ItemListComponent from "../componentes/ItemListComponent/ItemListComponent";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { product } = useParams();

    useEffect(() => {
        console.log(product);
        const getItems = async () => {
            const response = await fetch("json/productos.json");
            let data = await response.json();

            setProducts(data);
            setFilteredProducts(data);
        };

        getItems();
    }, []);

    useEffect(() => {
        if (product) {
            setFilteredProducts(products.filter((e) => e.category === product));
        } else {
            setFilteredProducts(products);
        }
    }, [product]);

    return (
        <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
            <ItemListComponent
                products={filteredProducts}
                setCart={props.setCart}
                cart={props.cart}
            />
        </div>
    );
};
export default ItemListContainer;
