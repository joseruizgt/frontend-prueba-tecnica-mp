import { useState } from "react";
import { Submenu } from "./Submenu";
import { NavLink } from "react-router-dom";
import { logout } from "../utils";


export const Navbar = () => {

    const logoutSystem = () => {
        logout();
        window.location.reload();
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const titleMain = "FISCALÍAS";
    const itemMain = [];
    const titleFiscalias = "MANEJO DE FISCALÍAS";
    const itemFiscalias = [];

    return (
        <nav
            className="w-full z-30 top-10 bg-white shadow-lg shadow-slate-300 mt-0"
        >
            <div className="w-full flex items-center justify-between mt-0 px-6 py-2 ">
                <div className="site-logo pe-10">
                    <a href="/">
                        <img
                            className="w-20 cursor-pointer md:w-24"
                            src="/assets/images/MP_logo.png"
                            alt="#"
                        />
                    </a>
                </div>

                {/* menu normal */}
                <div
                    className=" md:flex w-full hidden justify-between"
                >
                    <nav>
                        <ul className="md:flex items-center justify-between text-xs text-blue-900 pt-4 md:pt-0">
                            <li>
                                <NavLink
                                    to='/'
                                    className="rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent cursor-pointer inline-block no-underline hover:bg-blue-50 font-bold text-xs py-2 px-4 lg:ml-2 mr-2"
                                >
                                    FISCALÍAS
                                </NavLink>

                                <NavLink
                                    to='/fiscalia'
                                    className="rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent cursor-pointer inline-block no-underline hover:bg-blue-50 font-bold text-xs py-2 px-4 lg:ml-2 mr-2"
                                >
                                    MANEJO DE FISCALIAS
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div
                        className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
                    >
                        <div className="auth flex items-center w-full md:w-full">
                            <button
                                onClick={logoutSystem}
                                className="text-xs transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent text-blue-900 hover:text-white font-bold  p-2 rounded mr-4 hover:bg-red-500 "
                            >
                                CERRAR SESIÓN
                            </button>
                        </div>
                    </div>
                </div>

                {/* hamburgesa */}
                <div className="md:hidden">
                    <label
                        htmlFor="menu-toggle"
                        className="cursor-pointer md:hidden block ml-auto"
                    >
                        <button onClick={toggleMenu}>
                            {isOpen ?
                                < svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-current text-blue-900">
                                    <title>cerrar</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                :
                                <svg
                                    className="fill-current text-blue-900 "
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                >
                                    <title>menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>

                            }

                        </button>
                    </label>

                    <div
                        className={`${isOpen ? "animate__animated animate__backInDown animate__faster" : "animate__animated animate__backOutUp"
                            } absolute inset-x-0 bg-white z-50 mt-2 mx-3 rounded-lg shadow-2xl`}
                        id="menu"
                    >
                        <ul className="w-full items-center justify-end text-xs text-gray-500">
                            <li className="">
                                <Submenu items={itemMain} title={titleMain} titleLink="/" />
                                <Submenu items={itemFiscalias} title={titleFiscalias} titleLink="/fiscalia" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav >
    );
};
