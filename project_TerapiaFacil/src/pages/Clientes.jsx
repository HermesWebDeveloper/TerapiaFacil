import BarraLateral from "../components/BarraLateral";
import ListarClientes from "../components/ListarClientes";
import NavUser from "../components/NavUser";
import PesquisarClientes from "../components/PesquisarClientes";
import ThemeToggle from "../components/ThemeToggle";

function Clientes() {

    return (
        <>
            <div className="flex flex-row">
                <BarraLateral />
                <ListarClientes />
            </div>
        </>
    )
}

export default Clientes;