import React from 'react';
import { NavLink } from 'react-router-dom';

// Dados fictícios para clientes
const clientes = [
    { id: 1, cpf: '123.123.123-00', nome: 'João Silva', email: 'joao.silva@example.com', telefone: '(85) 99668-8778' },
    { id: 2, cpf: '123.123.123-00', nome: 'Maria Oliveira', email: 'maria.oliveira@example.com', telefone: '(85) 99668-8778' },
    { id: 3, cpf: '123.123.123-00', nome: 'Carlos Santos', email: 'carlos.santos@example.com', telefone: '(85) 99668-8778' },
];

function ListarClientes() {
    return (
        <>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-200">Lista de Clientes</h1>
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-700 dark:text-gray-100 dark:border-gray-500">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border text-gray-900 dark:border-gray-500 dark:text-gray-200">ID</th>
                            <th className="py-2 px-4 border text-gray-900 dark:border-gray-500 dark:text-gray-200">CPF</th>
                            <th className="py-2 px-4 border text-gray-900 dark:border-gray-500 dark:text-gray-200">Nome</th>
                            <th className="py-2 px-4 border text-gray-900 dark:border-gray-500 dark:text-gray-200">Email</th>
                            <th className="py-2 px-4 border text-gray-900 dark:border-gray-500 dark:text-gray-200">Telefone</th>
                            <th className="py-2 px-4 border text-gray-900 dark:border-gray-500 dark:text-gray-200" colSpan="2">Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente) => (
                            <tr key={cliente.id}>
                                <td className="py-2 px-4 border text-center dark:border-gray-500">{cliente.id}</td>
                                <td className="py-2 px-4 border dark:border-gray-500">{cliente.cpf}</td>
                                <td className="py-2 px-4 border dark:border-gray-500">{cliente.nome}</td>
                                <td className="py-2 px-4 border dark:border-gray-500">{cliente.email}</td>
                                <td className="py-2 px-4 border dark:border-gray-500">{cliente.telefone}</td>
                                <td className="py-2 px-4 border-b text-center dark:border-gray-500">
                                    <NavLink to={`/clientes/`+cliente.id}>
                                        Ver
                                    </NavLink>
                                </td>
                                <td className="py-2 px-4 border-b text-center dark:border-gray-500">
                                    <NavLink>
                                        Excluir
                                    </NavLink>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ListarClientes;