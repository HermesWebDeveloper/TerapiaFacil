import './BarraLateral.css'

function BarraLateral() {

    return (
        <>
            <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
                <div className="p-4 text-xl font-semibold bg-gray-900">
                    Meu App
                </div>
                <nav className="flex-1 mt-4">
                    <ul>
                        <li>
                            <a href="#" className="block p-4 hover:bg-gray-700 flex items-center">
                                <img src="/icons/painel.png" width="24" height="24" alt="Dashboard" className="mr-3" />
                                <p className="text-white">Dashboard</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-4 hover:bg-gray-700">
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-4 hover:bg-gray-700">
                                Contato
                            </a>
                        </li>
                        {/* Adicione mais itens aqui */}
                    </ul>
                </nav>
                <div className="p-4 bg-gray-900 text-center">
                    &copy; 2024 Meu App
                </div>
            </div>
        </>
    )
}

export default BarraLateral