import { React, useState } from "react";
import NavBar from ".././componentes/NavBarComponent/NavBar";
//import Items from "../componentes/ItemComponent/Item";
import ItemListContainer from "../Containers/ItemListContainer";

//esto se llama en app
const Container = () => {
    const [cart, setCart] = useState(0);
    console.log(cart);

    console.log(setCart);

    return (
        <div>
            <NavBar cart={cart} />
            {/* <Items addItem={addItem} deleteItem={deleteItem} /> */}
            <ItemListContainer setCart={setCart} cart={cart} />
        </div>
    );
};

export default Container;
