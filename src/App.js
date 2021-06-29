import './App.css';
import { React, useState } from "react";
import NavBar from './componentes/NavBarComponent/NavBar'
import ItemListContainer from "./Containers/ItemListContainer";






function App() {

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
}

export default App;
