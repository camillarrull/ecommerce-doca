import { Link, useParams } from "react-router-dom";

const ContactContainer = () => {
    const { nombreUsuario } = useParams();
    return (
        <div>
            <h1>Hola soy contacto</h1>
            <h2>Bienvenido {nombreUsuario}</h2>
            <button>
                <Link to={"/"}>IR A HOME</Link>
            </button>
        </div>
    );
};

export default ContactContainer;
