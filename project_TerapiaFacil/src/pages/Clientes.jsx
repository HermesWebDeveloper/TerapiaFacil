import BarraLateral from "../components/BarraLateral";
import ListarClientes from "../components/ListarClientes";

function Clientes () {

    return (
        <>
            <div className="flex flex-col">
                <BarraLateral />
                <ListarClientes />
            </div>
        </>
    )
}

export default Clientes;