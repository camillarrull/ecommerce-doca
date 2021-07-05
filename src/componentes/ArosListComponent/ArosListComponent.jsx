import { React } from "react";

import ArosComponent from "../ArosComponent/ArosComponent";

const ArosListComponent = (props) => {
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
                <ArosComponent
                    item={item}
                    setCart={props.setCart}
                    cart={props.cart}
                    key={item.id}
                />
            ))}
        </div>
    );
};
export default ArosListComponent;
