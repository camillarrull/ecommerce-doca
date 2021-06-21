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
    return (
        <div>
            <NavBar cart={cart} />
            <button
                onClick={() => {
                    setCart([...cart, { id: 1, name: "collar rojo" }]);
                }}
            >
                Agregar al carrito
            </button>
            <section
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                }}
            >
                <ItemListComponent productData={product[0]} />
                <ItemListComponent productData={product[1]} />
                <ItemListComponent productData={product[2]} />
            </section>
        </div>
    );
};

export default Container;
