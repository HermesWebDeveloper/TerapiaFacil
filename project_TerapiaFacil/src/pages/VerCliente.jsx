import BarraLateral from "../components/BarraLateral";
import InfoCliente from "../components/InfoCliente";

function VerCliente () {

    return(
        <>
            <div className="flex flex-row">
                <BarraLateral />
                <InfoCliente />
            </div>
        </>
    )
}

export default VerCliente;