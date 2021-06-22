import { React, useState } from "react";
import ItemListComponent from "../componentes/ItemListComponeny/ItemListComponent";
import NavBar from ".././componentes/NavBarComponent/NavBar";

const Container = () => {
    const [cart, setCart] = useState([]);
    console.log(cart);
    const product = [
        { id: 1, name: "Collar Dorado", price: 600, image: "arosAbeja.JPG" },
        { id: 2, name: "Pulcera", price: 346, image: "collarPampaOro.JPG" },
        { id: 3, name: "Aros", price: 500, image: "arosCaracol.JPG" },
    ];
    const addItem = () => {
        setCart(cart + 1);
    };
    const deleteItem = () => {
        setCart(cart - 1);
    };
    console.log(setCart);

    return (
        <div>
            <NavBar cart={cart} />

            <section
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                }}
            >
                <ItemListComponent
                    productData={product[0]}
                    addItem={addItem}
                    deleteItem={deleteItem}
                />
                <ItemListComponent
                    productData={product[1]}
                    addItem={addItem}
                    deleteItem={deleteItem}
                />
                <ItemListComponent
                    productData={product[2]}
                    addItem={addItem}
                    deleteItem={deleteItem}
                />
            </section>
        </div>
    );
};

export default Container;
