import { React, useState, useEffect } from "react";
import ItemDetailComponent from "../componentes/ItemDetailComponent/ItemDetailComponent";

const ItemDetailContainer = (props) => {
    const [item, setItem] = useState();

    useEffect(() => {
        fetch("json/productos.json")
            .then((response) => response.json())
            .then((datos) => {
                setItem(datos.find((element) => element.id === props.itemId));
            });
    }, [props.itemId]);

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {item ? <ItemDetailComponent item={item} /> : null}
        </div>
    );
};
export default ItemDetailContainer;
