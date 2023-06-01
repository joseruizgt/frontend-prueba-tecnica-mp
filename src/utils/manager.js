import CryptoJS from "crypto-js";
import Swal from "sweetalert2";

const tokenKey = 'token';
const rolKey = 'rol';

//GUARDAR EN LOCAL STORAGE
export function saveTokenLocalStorage(token) {
    localStorage.setItem(tokenKey, token);
}

export function saveRolLocalStorage(rol) {
    let auxRol = CryptoJS.AES.encrypt(rol.toString(), 'TYd23@201642').toString();
    localStorage.setItem(rolKey, auxRol);
}

//OBTENER DEL LOCAL STORAGE
export function getToken() {
    return localStorage.getItem(tokenKey);
}

export function getRol() {
    return localStorage.getItem(rolKey);
}


//REMOVER DEL LOCAL STORAGE
export function removeTokenLocalStorage() {
    localStorage.removeItem(tokenKey);
}

export function removeRolLocalStorage() {
    localStorage.removeItem(rolKey);
}

//DESENCRIPATR DE LOCAL STORAGE
export function decryptRolLocalStorage() {
    const rol = getRol();
    if (rol === null) return null;
    let bytes = CryptoJS.AES.decrypt(rol, 'TYd23@201642');
    let decryptRol = bytes.toString(CryptoJS.enc.Utf8);
    return decryptRol;
}

export function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
}

export function interceptorResponse(error) {
    if (error.response.status === 600) {
        Swal.fire({
            icon: 'error',
            title: '¡Sesión vencida!',
            text: 'Tú sesión ha expirado',
            allowOutsideClick: false
        }).then((result) => {
            logout();
            window.location.reload();
        })
    }
}