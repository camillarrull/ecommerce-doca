import React from "react";
import ItemListComponent from "./ItemListComponent";
//import arosAbeja from "../images/arosAbeja.JPG";
import arosAbeja from ".../arosAbeja.JPG";
import collarPampaOro from ".../collarPampaOro.JPG";

import arosCaracol from ".../arosCaracol.JPG";
const Container = () => {
    const product = [
        { id: 1, name: "Collar Dorado", price: 600, image: arosAbeja },
        { id: 2, name: "Pulcera", price: 346, image: collarPampaOro },
        { id: 3, name: "Aros", price: 500, image: arosCaracol },
    ];
    return (
        <div>
            <ItemListComponent productData={product[0]} />
            <ItemListComponent productData={product[1]} />
            <ItemListComponent productData={product[2]} />
        </div>
    );
};

export default Container;
