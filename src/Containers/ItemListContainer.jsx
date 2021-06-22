import React from "react";
import ItemListComponent from "../componentes/ItemListComponeny/ItemListComponent";

const ItemListContainer = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <ItemListComponent />
        </div>
    );
};
export default ItemListContainer;
