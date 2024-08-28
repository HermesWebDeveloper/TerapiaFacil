import { NavLink, useParams } from "react-router-dom";
import NavUser from "./NavUser";

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
            <div className="m-8 w-[80%]">
                <div className="flex justify-between">
                    <div className="flex flex-row">
                        <div className="">
                            <button className="h-12 w-12 flex items-center justify-center p-3 bg-gray-100 text-gray-700 font-semibold rounded-lg shadow hover-delay hover:bg-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col ml-4">
                            <div>
                                <p className="text-sm font-semibold text-gray-400">Voltar para a lista de clientes</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-800">Detalhes do Cliente</p>
                            </div>
                        </div>
                    </div>
                    <NavUser />
                </div>
                <div>
                    <div className="flex flex-row bg-gray-100 p-6 rounded-lg my-6 shadow justify-between">
                        <div className="flex flex-row">
                            <div>
                                <img src='/imgs/hermes.jpeg' alt='Hermes Dev' className='rounded-md w-16 h-16 object-cover mr-3'></img>
                            </div>
                            <div className="ml-2 flex flex-col align-middle">
                                <div>
                                    <p className="text-2xl font-semibold text-slate-600">Hermes Barbosa</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">
                                        Cliente ID: <span className="font-semibold text-gray-500">{id}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="ml-2 mt-2 flex flex-col align-middle">
                                <div className="bg-blue-900 text-gray-100 p-1 px-2 text-xs rounded-lg">
                                    Active
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="mx-2">
                                <button className="h-12 w-12 flex items-center justify-center p-3 bg-white text-gray-700 font-semibold rounded-lg shadow hover-delay hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mx-2">
                                <button className="h-12 w-12 flex items-center justify-center p-3 bg-white text-gray-700 font-semibold rounded-lg shadow hover-delay hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>

                                </button>
                            </div>
                            <div className="mx-2 h-12 flex items-center justify-center p-3 bg-blue-900 text-gray-200 font-semibold rounded-lg shadow hover-delay hover:cursor-pointer hover:bg-gray-800">
                                <p>
                                    Editar Cliente
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="bg-gray-100 p-6 rounded-lg w-[350px] shadow">
                        <div className="mb-3">
                            <p className="text-xl font-semibold text-slate-800">Informações de Contato</p>
                        </div>
                        <div className="my-4">
                            <div>
                                <p className="text-sm text-gray-400">Número de Telefone:</p>
                            </div>
                            <div>
                                <p className="text-slate-800 font-semibold text-base">{cliente.telefone}</p>
                            </div>
                        </div>
                        <div className="my-4">
                            <div>
                                <p className="text-sm text-gray-400">Email:</p>
                            </div>
                            <div>
                                <p className="text-slate-800 font-semibold text-base">{cliente.email}</p>
                            </div>
                        </div>
                        <div className="my-4">
                            <div>
                                <p className="text-sm text-gray-400">Endereço:</p>
                            </div>
                            <div>
                                <p className="text-slate-800 font-semibold text-base">{cliente.endereco}</p>
                            </div>
                        </div>
                        <div className="my-4">
                            <div>
                                <p className="text-sm text-gray-400">Cidade/UF:</p>
                            </div>
                            <div>
                                <p className="text-slate-800 font-semibold text-base">{cliente.cidadeuf}</p>
                            </div>
                        </div>
                        <div className="my-4">
                            <div>
                                <p className="text-sm text-gray-400">Contato Emergencial:</p>
                            </div>
                            <div>
                                <p className="text-slate-800 font-semibold text-base">Jonh Sipsom - Brother</p>
                                <p className="text-slate-800 font-semibold text-base">+ 1 55 5535-9923</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow mx-6">
                            <div className="mb-3">
                                <p className="text-xl font-semibold text-slate-800">Informações Gerais</p>
                            </div>
                            <div className="flex flex-row gap-10">
                                <div>
                                    <div className="flex flex-row justify-between my-3">
                                        <div className="mr-24">
                                            <p className="text-sm text-gray-400">Gênero:</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-800 font-semibold text-base">Masculino</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between my-3">
                                        <div className="mr-24">
                                            <p className="text-sm text-gray-400">Idade:</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-800 font-semibold text-base">19 anos</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between my-3">
                                        <div className="mr-24">
                                            <p className="text-sm text-gray-400">Nascimento:</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-800 font-semibold text-base">08/12/2004</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-0.5 h-28 bg-gray-300"></div>
                                <div>
                                    <div className="flex flex-row justify-between my-3">
                                        <div className="mr-24">
                                            <p className="text-sm text-gray-400">Profissão:</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-800 font-semibold text-base">Engenheiro de Sotware</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between my-3">
                                        <div className="mr-24">
                                            <p className="text-sm text-gray-400">Nível:</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-800 font-semibold text-base">Premium</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between my-3">
                                        <div className="mr-24">
                                            <p className="text-sm text-gray-400">CPF:</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-800 font-semibold text-base">{cliente.cpf}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-6">
                    <div className="mb-2">
                        <p className="text-xl font-semibold text-slate-800">Informações de Saúde</p>
                    </div>
                    <div className="border h-[250px] rounded-lg p-6 flex gap-24">
                        <div>
                            <div className="flex flex-row mb-4">
                                <div className="h-12 w-12 flex items-center justify-center p-3 bg-cyan-200 font-semibold rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <div>
                                        <p className="text-sm text-gray-400">Altura:</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-800 font-semibold text-base">1.78 cm</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row my-4">
                                <div className="h-12 w-12 flex items-center justify-center p-3 bg-cyan-200 font-semibold rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>

                                </div>
                                <div className="ml-4">
                                    <div>
                                        <p className="text-sm text-gray-400">Coração:</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-800 font-semibold text-base">150 BPM</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row my-4">
                                <div className="h-12 w-12 flex items-center justify-center p-3 bg-cyan-200 font-semibold rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                                    </svg>

                                </div>
                                <div className="ml-4">
                                    <div>
                                        <p className="text-sm text-gray-400">Colesterol:</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-800 font-semibold text-base">180 mg/Dl</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row mb-4">
                                <div className="h-12 w-12 flex items-center justify-center p-3 bg-cyan-200 font-semibold rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <div>
                                        <p className="text-sm text-gray-400">Altura:</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-800 font-semibold text-base">1.78 cm</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row my-4">
                                <div className="h-12 w-12 flex items-center justify-center p-3 bg-cyan-200 font-semibold rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>

                                </div>
                                <div className="ml-4">
                                    <div>
                                        <p className="text-sm text-gray-400">Coração:</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-800 font-semibold text-base">150 BPM</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row my-4">
                                <div className="h-12 w-12 flex items-center justify-center p-3 bg-cyan-200 font-semibold rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                                    </svg>

                                </div>
                                <div className="ml-4">
                                    <div>
                                        <p className="text-sm text-gray-400">Colesterol:</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-800 font-semibold text-base">180 mg/Dl</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row mb-4">
                                <div className="h-12 w-12 flex items-center justify-center p-3 bg-cyan-200 font-semibold rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <div>
                                        <p className="text-sm text-gray-400">Altura:</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-800 font-semibold text-base">1.78 cm</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row my-4">
                                <div className="h-12 w-12 flex items-center justify-center p-3 bg-cyan-200 font-semibold rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>

                                </div>
                                <div className="ml-4">
                                    <div>
                                        <p className="text-sm text-gray-400">Coração:</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-800 font-semibold text-base">150 BPM</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row my-4">
                                <div className="h-12 w-12 flex items-center justify-center p-3 bg-cyan-200 font-semibold rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                                    </svg>

                                </div>
                                <div className="ml-4">
                                    <div>
                                        <p className="text-sm text-gray-400">Colesterol:</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-800 font-semibold text-base">180 mg/Dl</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-6">
                    <div className="mb-2">
                        <p className="text-xl font-semibold text-slate-800">Informações de Personalidade</p>
                    </div>
                    <div className="border h-[250px] rounded-lg p-6 flex gap-24">
                        <div>
                            <div className="flex flex-row mb-4">
                                <div className="h-12 w-12 flex items-center justify-center p-3 bg-cyan-200 font-semibold rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <div>
                                        <p className="text-sm text-gray-400">Altura:</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-800 font-semibold text-base">1.78 cm</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row my-4">
                                <div className="h-12 w-12 flex items-center justify-center p-3 bg-cyan-200 font-semibold rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>

                                </div>
                                <div className="ml-4">
                                    <div>
                                        <p className="text-sm text-gray-400">Coração:</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-800 font-semibold text-base">150 BPM</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row my-4">
                                <div className="h-12 w-12 flex items-center justify-center p-3 bg-cyan-200 font-semibold rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                                    </svg>

                                </div>
                                <div className="ml-4">
                                    <div>
                                        <p className="text-sm text-gray-400">Colesterol:</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-800 font-semibold text-base">180 mg/Dl</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row mb-4">
                                <div className="h-12 w-12 flex items-center justify-center p-3 bg-cyan-200 font-semibold rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <div>
                                        <p className="text-sm text-gray-400">Altura:</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-800 font-semibold text-base">1.78 cm</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row my-4">
                                <div className="h-12 w-12 flex items-center justify-center p-3 bg-cyan-200 font-semibold rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>

                                </div>
                                <div className="ml-4">
                                    <div>
                                        <p className="text-sm text-gray-400">Coração:</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-800 font-semibold text-base">150 BPM</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row my-4">
                                <div className="h-12 w-12 flex items-center justify-center p-3 bg-cyan-200 font-semibold rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                                    </svg>

                                </div>
                                <div className="ml-4">
                                    <div>
                                        <p className="text-sm text-gray-400">Colesterol:</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-800 font-semibold text-base">180 mg/Dl</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row mb-4">
                                <div className="h-12 w-12 flex items-center justify-center p-3 bg-cyan-200 font-semibold rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <div>
                                        <p className="text-sm text-gray-400">Altura:</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-800 font-semibold text-base">1.78 cm</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row my-4">
                                <div className="h-12 w-12 flex items-center justify-center p-3 bg-cyan-200 font-semibold rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>

                                </div>
                                <div className="ml-4">
                                    <div>
                                        <p className="text-sm text-gray-400">Coração:</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-800 font-semibold text-base">150 BPM</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row my-4">
                                <div className="h-12 w-12 flex items-center justify-center p-3 bg-cyan-200 font-semibold rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                                    </svg>

                                </div>
                                <div className="ml-4">
                                    <div>
                                        <p className="text-sm text-gray-400">Colesterol:</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-800 font-semibold text-base">180 mg/Dl</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoCliente;