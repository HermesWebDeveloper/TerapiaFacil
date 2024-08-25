import BarraLateral from "../components/BarraLateral";
import ListarClientes from "../components/ListarClientes";
import PesquisarClientes from "../components/PesquisarClientes";
import ThemeToggle from "../components/ThemeToggle";

function Clientes () {

    return (
        <>
            <div className="flex flex-row">
                <BarraLateral />
                <div className="w-[80%]">
                    <div className="flex flex-row">
                        <PesquisarClientes/>
                        <ThemeToggle />
                    </div>
                    <ListarClientes />
                </div>
            </div>
        </>
    )
}

export default Clientes;