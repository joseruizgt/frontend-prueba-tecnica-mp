import { Navigate } from 'react-router-dom';
import { getToken } from '../utils';

export const PublicRoute = ({ children }) => {
    return getToken()
        ? <Navigate to="/" />
        : children
}
