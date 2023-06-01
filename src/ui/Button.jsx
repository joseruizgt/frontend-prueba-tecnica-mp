import { NavLink } from "react-router-dom"

export const ButtonLink = ({ bgColor, bgText, hoverColor, title, direccion }) => {
    return (
        <NavLink to={direccion}>
            <button className={`block mt-2 sm:mt-0 lg:inline-block lg:mt-0 ${bgColor} ${bgText} mx-1 px-4 py-2 rounded ${hoverColor} mr-2 mt-4`} >
                {title}
            </button>
        </NavLink>
    )
}