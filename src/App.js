import './App.css';
import { React, useState } from "react";
import NavBar from './componentes/NavBarComponent/NavBar'
import ItemListContainer from "./Containers/ItemListContainer";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactContainer from './Containers/ContactContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer'





function App() {

    const [cart, setCart] = useState(0);
    console.log(cart);

    console.log(setCart);
    return (
        <BrowserRouter>
            <div>
                <NavBar cart={cart} />
                {/* <Items addItem={addItem} deleteItem={deleteItem} /> */}
                <Switch>
                    <Route exact path='/'>
                        <ItemListContainer setCart={setCart} cart={cart} />
                    </Route>
                    <Route exact path='/contacto/:nombreUsuario'>
                        <ContactContainer />
                    </Route>
                    <Route exact path='/productos/:product_id'>
                        <ItemDetailContainer />
                    </Route>
                </Switch>



            </div>
        </BrowserRouter>
    );
}

export default App;
