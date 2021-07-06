import { React, useState, useEffect } from "react";
import ItemDetailComponent from "../componentes/ItemDetailComponent/ItemDetailComponent";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
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
    /*   useEffect(() => {
        fetch("json/productos.json/")
            .then((response) => response.json())
            .then((datos) => {
                setItem(datos.find((element) => element.id === product_id));
                //console.log("hola" + datos);
                console.log(item);
            });
    }, [product_id]); */

    /*  useEffect(() => {
         const fetchJSON = async () => {
             const response = await fetch(`json/productos.json/${product_id}`);
             let json = await response.json();
             setItem(json);
         };
         fetchJSON();
     }, [product_id]);   */

    /*    useEffect(() => {
        fetch(`json/productos.json/${product_id}`)
            .then((response) => response.json())
            .then((datos) => {
                setItem(datos);
            });
    }, [product_id]);
    console.log("hola" + item); */
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {item.status === 400 ? (
                <p>Item no encontrado</p>
            ) : (
                <ItemDetailComponent item={item} />
            )}
        </div>
    );
};
export default ItemDetailContainer;
