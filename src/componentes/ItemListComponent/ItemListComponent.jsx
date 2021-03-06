import { React } from "react";

import ItemComponent from "../ItemComponent/ItemComponent";

const ItemListComponent = (props) => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                //justifyContent: "space-between",
                padding: "0px",
                margin: "5%",
                width: "80%",
                alignSelf: "center",
            }}
        >
            {props.products.map((item) => (
                <ItemComponent
                    item={item}
                    setCart={props.setCart}
                    cart={props.cart}
                    key={item.product_id}
                />
            ))}
        </div>
    );
};
export default ItemListComponent;
