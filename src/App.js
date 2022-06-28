import './App.css';
import {
    React,
    useState
} from "react";
import NavBar from './componentes/NavBarComponent/NavBar'
import ItemListContainer from "./Containers/ItemListContainer";
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import CartComponent from './componentes/CartComponent/CartComponent'
import Container from './componentes/Preguntados/Container/Container'
import {
    ShopContext
} from './Context/ShopContext';


function App() {

    const [cart, setCart] = useState(0);

    return (
        <ShopContext.Provider >
            <BrowserRouter >
                <div>
                    {/* <NavBar cart={cart} /> */}
                    <Switch >
                        <Route exact path='/' >
                            <ItemListContainer setCart={setCart} cart={cart} />
                        </Route>
                        <Route exact path='/category/:product' >
                            <ItemListContainer setCart={setCart} cart={cart} />
                        </Route >
                        <Route exact path='/productos/:product_id'>
                            <ItemDetailContainer setCart={setCart} cart={cart} />
                        </Route>
                        <Route exact path='/cart' >
                            <CartComponent setCart={setCart} cart={cart} />
                        </Route>
                        <Route exact path='/preguntados' >
                            <Container/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </ShopContext.Provider>
    );
}

export default App;