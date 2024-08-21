import React from 'react';

// Dados fictícios para clientes
const clientes = [
    { id: 1, nome: 'João Silva', email: 'joao.silva@example.com' },
    { id: 2, nome: 'Maria Oliveira', email: 'maria.oliveira@example.com' },
    { id: 3, nome: 'Carlos Santos', email: 'carlos.santos@example.com' },
];

function ListarClientes() {
    return (
        <>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Lista de Clientes</h1>
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Nome</th>
                            <th className="py-2 px-4 border-b">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente) => (
                            <tr key={cliente.id}>
                                <td className="py-2 px-4 border-b">{cliente.id}</td>
                                <td className="py-2 px-4 border-b">{cliente.nome}</td>
                                <td className="py-2 px-4 border-b">{cliente.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ListarClientes;