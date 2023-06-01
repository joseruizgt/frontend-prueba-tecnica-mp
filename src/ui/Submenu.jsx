import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Submenu = ({ items, title, titleLink }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if (isOpen) return setIsOpen(false);
        return setIsOpen(true);

    }

    return (
        <div
            className="inline-block text-left z-10 w-full border border-sky-50"

        >
            <div className="flex justify-between bg-transparent ">
                <div>
                    <button
                        type="button"
                        className="inline-flex justify-center w-full px-4 py-2  text-gray-500  p-2 rounded mr-4 "
                    >
                        <NavLink to={titleLink} className="font-bold">
                            {title}
                        </NavLink>
                    </button>
                </div>

                {
                    items !== undefined ?
                        <div className="mr-2 ps-2 border-s cursor-pointer" onClick={handleClick} >
                            {isOpen ?
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mt-2">
                                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mt-2">
                                    <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                                </svg>
                            }
                        </div>
                        : ''
                }

            </div>
            {isOpen && (
                <div
                    className="animate__animated animate__headShake text-center origin-center bg-white ring-1 ring-black ring-opacity-5 z-10"
                >
                    <div className="w-full" role="none">
                        {items.map((item) => (
                            <NavLink
                                key={item.id}
                                to={item.href}
                                className="block border border-sky-50 px-4 py-2 text-xs bg-transparent cursor-pointer no-underline hover:bg-blue-50 font-medium md:text-sm"
                                role="menuitem"
                                tabIndex="1"
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
