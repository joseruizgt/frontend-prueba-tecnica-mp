import { apiRest } from "../../../api/apiRest";
import { errorModal, getToken, interceptorResponse, successModal } from "../../../utils";
import { fiscaliaIndividualCredentials, fiscaliasCredentials, isLoading, loaded } from "./fiscaliaSlice";

export const obtenerFiscalias = (busqueda = '', pagina, limite = '', departamento = '') => {
    return async (dispatch) => {
        try {
            dispatch(isLoading());
            const { data } = await apiRest.get('/fiscalia', { headers: { 'token': getToken() }, params: { pagina, busqueda, limite, departamento } });
            dispatch(fiscaliasCredentials(data));
        } catch (error) {
            dispatch(loaded());
            interceptorResponse(error);
        }
    }
}

export const crearFiscalia = (data1, reset, fileList, setFileList, setLoading, navigate) => {
    return async () => {
        setLoading(true)
        try {

            const f = new FormData();

            let titles = Object.keys(data1);
            for (let i = 0; i < titles.length; i++) {
                let valueTitle = titles[i];
                f.append(titles[i], data1[valueTitle]);
            }

            for (let i = 0; i < fileList.length; i++) {
                f.append('archivos', fileList[i].archivo);
            }

            await apiRest.post('/fiscalia/crear', f, { headers: { 'token': getToken(), 'Content-Type': 'multipart/form-data' } });
            successModal('Registro creado correctamente', 'center');
            reset();
            setFileList([]);
            setLoading(false)
            navigate('/fiscalia')
        } catch (error) {
            errorModal(error.response.data.msg);
            setLoading(false)
        }
    }
}

export const obtenerFiscaliaIndividual = (id_fiscalia) => {
    return async (dispatch) => {
        try {
            dispatch(isLoading());
            const { data } = await apiRest.get('/fiscalia/individual', { headers: { 'token': getToken() }, params: { id_fiscalia } });
            dispatch(fiscaliaIndividualCredentials(data));
        } catch (error) {
            dispatch(loaded());
            interceptorResponse(error);
        }
    }
}

export const eliminarFiscalia = (funcion, id_fiscalia, setLoader) => {
    return async () => {
        try {
            setLoader(true);
            await apiRest.delete('/fiscalia/eliminar', { headers: { 'token': getToken() }, params: { id_fiscalia } });
            successModal('Usuario eliminado correctamente', 'center');
            funcion();
            setLoader(false);

        } catch (error) {
            errorModal(error.response.data.msg);
            setLoader(false);
        }
    }
}

export const obtenerFiscaliaIndividual2 = (setValue, id_fiscalia) => {
    return async (dispatch) => {
        try {
            dispatch(isLoading());
            const { data } = await apiRest.get('/fiscalia/individual', { headers: { 'token': getToken() }, params: { id_fiscalia } });
            setValue('nombre_fiscalia', data.fiscalia.nombre_fiscalia);
            setValue('descripcion', data.fiscalia.descripcion);
            setValue('telefono', data.fiscalia.telefono);
            setValue('direccion', data.fiscalia.direccion);
            setValue('departamento', data.fiscalia.departamento);
            dispatch(loaded());
        } catch (error) {
            dispatch(loaded());
            interceptorResponse(error);
        }
    }
}

export const editarFiscalia = (id_fiscalia, data1, fileList, setFileList, navigate) => {
    return async (dispatch) => {
        try {
            dispatch(isLoading());
            const f = new FormData();

            let titles = Object.keys(data1);
            for (let i = 0; i < titles.length; i++) {
                let valueTitle = titles[i];
                f.append(titles[i], data1[valueTitle]);
            }

            for (let i = 0; i < fileList.length; i++) {
                f.append('archivos', fileList[i].archivo);
            }

            await apiRest.put('/fiscalia/editar', f, { headers: { 'token': getToken(), 'Content-Type': 'multipart/form-data' }, params: { id_fiscalia } });
            successModal('Registro editado correctamente', 'center');
            dispatch(loaded());
            setFileList([]);
            navigate('/fiscalia')
        } catch (error) {
            errorModal(error.response.data.msg);
            dispatch(loaded());
        }
    }
}