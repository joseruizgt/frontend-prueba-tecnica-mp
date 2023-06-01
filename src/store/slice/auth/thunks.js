import { apiRest } from "../../../api/apiRest";
import { saveRolLocalStorage, saveTokenLocalStorage } from "../../../utils";
import { errorModal, successModal } from "../../../utils/Modals";
import { credentials, isLoading, loaded } from "./authSlice";

export const startLogin = (data1) => {
    return async (dispatch) => {
        //destructuracion de lo que venga en data
        try {
            dispatch(isLoading());
            const { data } = await apiRest.post("/auth/login", data1);
            saveTokenLocalStorage(data.token);
            saveRolLocalStorage(data.rol);
            dispatch(credentials(data));
            successModal('Inicio de sesion', 'top-end');
        } catch (error) {
            dispatch(loaded());
            errorModal(error.response.data.msg);
        }
    }
}
