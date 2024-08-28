import { NavLink, useParams } from "react-router-dom";




function InfoCliente() {

    const { id } = useParams();

    // Dados fictícios para clientes
    const clientes = [
        { id: 1, cpf: '123.123.123-00', nome: 'João Silva', email: 'joao.silva@example.com', telefone: '(85) 99668-8778', dataNascimento: '08/12/2004', endereco: 'Via Paisagística, 80, ap. 503', cidadeuf: 'Fortaleza - CE' },
        { id: 2, cpf: '123.123.123-00', nome: 'Maria Oliveira', email: 'maria.oliveira@example.com', telefone: '(85) 99668-8778', dataNascimento: '08/12/2004', endereco: 'Via Paisagística, 80, ap. 503', cidadeuf: 'Fortaleza - CE', },
        { id: 3, cpf: '123.123.123-00', nome: 'Carlos Santos', email: 'carlos.santos@example.com', telefone: '(85) 99668-8778', dataNascimento: '08/12/2004', endereco: 'Via Paisagística, 80, ap. 503', cidadeuf: 'Fortaleza - CE', },
    ];

    const cliente = clientes[id - 1];

    return (
        <>
            <div>
                <h1 className="text-[24px] font-semibold p-4 text-gray-900 dark:text-gray-200">Informações do Cliente {id}</h1>
                <div className="flex flex-row">
                    <div className="border m-4 mt-0 py-4 rounded-lg w-[1000px] dark:border-gray-500">
                        <form className="">
                            <div className="ml-4 flex flex-row">
                                <div className="w-72 p-2">
                                    <img src="/imgs/hermes.jpeg" className="w-36 h-36 object-cover" alt="Foto do cliente"></img>
                                    <button className="text-gray-900 bg-gray-200 hover:bg-gray-300 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700 font-medium text-sm w-36 h-6">
                                        Alterar
                                    </button>
                                    <button className="text-gray-900 bg-gray-200 hover:bg-gray-300 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700 font-medium text-sm w-36 h-6">
                                        Excluir
                                    </button>
                                </div>
                                <div className="flex flex-wrap">
                                    <div className="ml-4">
                                        <label className="m-1 flex flex-col dark:text-gray-200">Nome completo:</label>
                                        <input type="text" id="name" className="border ps-4 rounded-lg p-2 w-96 dark:border-gray-500 dark:text-gray-200 dark:bg-gray-700" placeholder="Nome do Cliente" value={cliente.nome}></input>
                                    </div>
                                    <div className="ml-4">
                                        <label className="m-1 flex flex-col dark:text-gray-200">CPF:</label>
                                        <input type="text" id="email" className="border ps-4 rounded-lg p-2 w-56 dark:border-gray-500 dark:text-gray-200 dark:bg-gray-700" placeholder="Email@gmail.com" value={cliente.cpf}></input>
                                    </div>
                                    <div className="ml-4">
                                        <label className="m-1 flex flex-col dark:text-gray-200">Data de Nascimento:</label>
                                        <input type="text" id="email" className="border rounded-lg p-2 w-40 text-center dark:border-gray-500 dark:text-gray-200 dark:bg-gray-700" placeholder="Email@gmail.com" value={cliente.dataNascimento}></input>
                                    </div>
                                    <div className="ml-4">
                                        <label className="m-1 flex flex-col dark:text-gray-200">Endereço:</label>
                                        <input type="text" id="name" className="border ps-4 rounded-lg p-2 w-96 dark:border-gray-500 dark:text-gray-200 dark:bg-gray-700" placeholder="Nome do Cliente" value={cliente.endereco}></input>
                                    </div>
                                    <div className="ml-4">
                                        <label className="m-1 flex flex-col dark:text-gray-200">Cidade/UF:</label>
                                        <input type="text" id="name" className="border ps-4 rounded-lg p-2 w-40 dark:border-gray-500 dark:text-gray-200 dark:bg-gray-700" placeholder="Nome do Cliente" value={cliente.cidadeuf}></input>
                                    </div>
                                    <div className="ml-4">
                                        <label className="m-1 flex flex-col dark:text-gray-200">Telefone:</label>
                                        <input type="text" id="name" className="border ps-4 rounded-lg p-2 w-48 dark:border-gray-500 dark:text-gray-200 dark:bg-gray-700" placeholder="Nome do Cliente" value={cliente.telefone}></input>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-4 flex flex-wrap">
                                <div className="ml-4">
                                    <label className="m-1 flex flex-col dark:text-gray-200 ">Observações:</label>
                                    <textarea className="border ps-4 rounded-lg p-2 w-96 h-[100px] dark:border-gray-500 dark:text-gray-200 dark:bg-gray-700 resize-none"></textarea>
                                </div>
                                <div className="ml-4">
                                    <label className="m-1 flex flex-col dark:text-gray-200">Email:</label>
                                    <input type="text" id="email" className="border ps-4 rounded-lg p-2 w-96 dark:border-gray-500 dark:text-gray-200 dark:bg-gray-700" placeholder="Nome do Cliente" value={cliente.email}></input>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-col">
                        <div className="m-2">
                            <button className="text-gray-900 bg-gray-200 hover:bg-gray-300 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700 font-medium rounded-lg text-lg px-4 py-2 w-40 h-12">
                                Salvar
                            </button>
                        </div>
                        <div className="m-2">
                            <button className="text-gray-900 bg-gray-200 hover:bg-gray-300 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700 font-medium rounded-lg text-lg px-4 py-2 w-40 h-12">
                                Alterar
                            </button>
                        </div>
                        <div className="m-2">
                            <button className="text-gray-900 bg-gray-200 hover:bg-gray-300 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700 font-medium rounded-lg text-lg px-4 py-2 w-40 h-12">
                                Excluir
                            </button>
                        </div>
                        <div className="m-2">
                            <NavLink to='/clientes/'>
                                <button className="text-gray-900 bg-gray-400 hover:bg-gray-500 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700 font-medium rounded-lg text-lg px-4 py-2 w-40 h-12">
                                    Sair
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoCliente;