import './App.css';
import NavBar from './componentes/NavBarComponent/NavBar';
import ItemListComponent from './componentes/ItemListComponent/ItemListComponent';
import arosAbeja from './assets/arosAbeja.JPG';
import collarPampaOro from './assets/collarPampaOro.JPG';
import arosCaracol from './assets/arosCaracol.JPG';




function App() {
    const product = [{ id: 1, name: 'Collar Dorado', price: 600, image: arosAbeja },
    { id: 2, name: 'Pulcera', price: 346, image: collarPampaOro },
    { id: 3, name: 'Aros', price: 500, image: arosCaracol }]

    return (
        <div>

            <NavBar />
            <ItemListComponent productData={product[0]} />
            <ItemListComponent productData={product[1]} />
            <ItemListComponent productData={product[2]} />
        </div>
    );
}

export default App;
