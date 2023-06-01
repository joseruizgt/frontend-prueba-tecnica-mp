import { Navigate, Outlet } from 'react-router-dom';
import { decryptRolLocalStorage, getToken } from '../utils';
import { NotFound } from '../ui';

export const PrivateRoute = ({ rols }) => {
    let countRol = 0;
    const token = getToken();
    const rol = decryptRolLocalStorage();

    if (token) {
        for (let i = 0; i < rols.length; i++) {
            if (rol === rols[i].toString()) {
                countRol++;
                break;
            }
        }
    }
    return (
        token
            ? countRol > 0
                ? <Outlet />
                : <NotFound />
            : <Navigate to="/login" />
    )
}
