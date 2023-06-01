import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Dropdown = ({ items, title, titleLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left z-10">
      <button
        type="button"
        className="inline-flex justify-center w-full px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent text-gray-500  p-2 rounded mr-4 hover:bg-blue-50"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        <NavLink to={titleLink} className="font-bold">
          {title}
        </NavLink>
        {isOpen && (
          <div
            className="origin-center absolute mt-6 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
            <div className="py-1 " role="none">
              {items.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.href}
                  className="block px-4 py-2 text-xs rounded transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 duration-300 bg-transparent cursor-pointer no-underline hover:bg-blue-50 font-medium lg:ml-2 mr-2 md:text-sm"
                  role="menuitem"
                  tabIndex="1"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </button>
    </div>
  );
};
