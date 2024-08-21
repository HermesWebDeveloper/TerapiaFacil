import './BarraLateral.css'
import { NavLink } from 'react-router-dom';

function BarraLateral() {

    return (
        <>
            <div className="w-64 h-screen bg-slate-900 text-white flex flex-col">
                <div className='flex flex-row items-center mt-4'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' className='w-10 h-10 ml-4'></img>
                    <p className="p-4 text-xl font-semibol">Terapia Fácil</p>
                </div>
                <nav className="flex-1 mt-4">
                    <ul className="text-gray-400">
                        <li>
                            <NavLink
                                to="/system/"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'block p-4 flex items-center rounded mx-4 h-10 my-1 font-semibold text-gray-50 bg-gray-800 svg-navbar'
                                        : 'block p-4 flex items-center rounded mx-4 h-10 my-1 font-semibold text-gray-400 hover:text-gray-50 hover:bg-gray-800 svg-navbar'
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6 mr-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 12L11.204 3.045c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>
                                <p>Dashboard</p>
                            </NavLink>
                        </li>
                        <li className='hover:text-gray-50 svg-navbar'>
                            <NavLink
                                to="/clientes/"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'block p-4 flex items-center rounded mx-4 h-10 my-1 font-semibold text-gray-50 bg-gray-800 svg-navbar'
                                        : 'block p-4 flex items-center rounded mx-4 h-10 my-1 font-semibold text-gray-400 hover:text-gray-50 hover:bg-gray-800 svg-navbar'
                                }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                <p className=''>Clientes</p>
                            </NavLink>
                        </li>
                        <li className='hover:text-gray-50 svg-navbar'>
                            <NavLink
                                to="/consultas/"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'block p-4 flex items-center rounded mx-4 h-10 my-1 font-semibold text-gray-50 bg-gray-800 svg-navbar'
                                        : 'block p-4 flex items-center rounded mx-4 h-10 my-1 font-semibold text-gray-400 hover:text-gray-50 hover:bg-gray-800 svg-navbar'
                                }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                                </svg>

                                <p className=''>Consultas</p>
                            </NavLink>
                        </li>
                        {/* Adicione mais itens aqui */}
                    </ul>
                </nav>
                <div className="p-4 text-center flex items-center justify-center hover:bg-gray-800 hover:cursor-pointer">
                    <img src='/imgs/hermes.jpeg' alt='Hermes Dev' className='rounded-full w-10 h-10 object-cover mr-3'></img>
                    <p>
                        &copy; Hermes Barbosa
                    </p>
                </div>
            </div>
        </>
    )
}

export default BarraLateral;