import React from 'react';
import { NavLink } from 'react-router-dom';
import NavUser from './NavUser';

// Dados fictícios para clientes
const clientes = [
    { id: 1, cpf: '123.123.123-00', nome: 'João Silva', email: 'joao.silva@example.com', telefone: '(85) 99668-8778' },
    { id: 2, cpf: '123.123.123-00', nome: 'Maria Oliveira', email: 'maria.oliveira@example.com', telefone: '(85) 99668-8778' },
    { id: 3, cpf: '123.123.123-00', nome: 'Carlos Santos', email: 'carlos.santos@example.com', telefone: '(85) 99668-8778' },
];

function ListarClientes() {
    return (
        <>
            <div className='p-6'>
                <div className='flex flex-row justify-between'>
                    <div className='flex items-center'>
                        <p className="text-2xl font-bold text-gray-800">Clientes</p>
                    </div>
                    <div>
                        <NavUser />
                    </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg my-6 shadow">
                    <div className='flex flex-row justify-between mb-6'>
                        <div className='flex flex-row gap-4'>
                            <form className="max-w-md mx-auto">
                                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-h text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-[400px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 h-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Procure pelo nome, ID, CPF, telefone ou e-mail" required />
                                </div>
                            </form>

                            <form className="max-w-sm mx-auto">
                                <label for="countries" className="block text-sm font-medium text-gray-900 dark:text-white"></label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Selecione a Cidade</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </form>
                        </div>

                        <div>
                            <div className="mx-2 h-12 flex items-center justify-center p-3 bg-blue-900 text-gray-200 font-semibold rounded-lg shadow hover-delay hover:cursor-pointer hover:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                <p className="text-sm ml-1">
                                    Novo Cliente
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <table className="bg-white rounded-xl mt-3">
                            <thead>
                                <tr className='border-b'>
                                    <th className="text-xs text-gray-400 p-3 pl-6 w-[250px] text-start">Nome</th>
                                    <th className="text-xs text-gray-400 p-3 w-[50px] text-start">ID</th>
                                    <th className="text-xs text-gray-400 p-3 w-[200px] text-start">CPF</th>
                                    <th className="text-xs text-gray-400 p-3 w-[300px] text-start">Email</th>
                                    <th className="text-xs text-gray-400 p-3 w-[200px] text-start">Telefone</th>
                                    <th className="text-xs text-gray-400 p-3 pr-6 w-[200px]" colSpan="2">Opções</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientes.map((cliente) => (
                                    <tr className='border-b' key={cliente.id}>
                                        <td className="p-3 pl-6 flex flex-row items-center">
                                            <img src='/imgs/hermes.jpeg' alt='Hermes Dev' className='rounded-full w-12 h-12 object-cover mr-3'></img>
                                            <p className="text-slate-800 font-semibold text-base">{cliente.nome}</p>
                                        </td>
                                        <td className="p-3 text-slate-800 font-semibold text-base">{cliente.id}</td>
                                        <td className="p-3 text-slate-800 font-semibold text-base">{cliente.cpf}</td>
                                        <td className="p-3 text-slate-800 font-semibold text-base">{cliente.email}</td>
                                        <td className="p-3 text-slate-800 font-semibold text-base">{cliente.telefone}</td>
                                        <td className="p-3 pr-6 text-slate-800 font-semibold text-base text-center">
                                            <NavLink to={`/clientes/` + cliente.id}>
                                                Ver
                                            </NavLink>
                                        </td>
                                        <td className="p-3 pr-6 text-slate-800 font-semibold text-base text-center">
                                            <NavLink>
                                                Excluir
                                            </NavLink>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListarClientes;