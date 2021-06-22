import { React, useState } from "react";
//import ItemListComponent from "../componentes/ItemListComponeny/ItemListComponent";
import NavBar from ".././componentes/NavBarComponent/NavBar";
import Items from "../componentes/ItemComponent/Item";

const Container = () => {
    const [cart, setCart] = useState([]);
    console.log(cart);

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
            <Items addItem={addItem} deleteItem={deleteItem} />
        </div>
    );
};

export default Container;
