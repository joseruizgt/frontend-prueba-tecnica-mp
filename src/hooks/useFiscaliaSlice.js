import { useDispatch, useSelector } from "react-redux";
import { obtenerFiscaliaIndividual, obtenerFiscaliaIndividual2, obtenerFiscalias } from "../store/slice/fiscalia";

export const useFiscaliaSlice = () => {

    const dispatch = useDispatch();
    const { fiscalias, cantidad, totalPaginas, loading, fiscaliaIndividual } = useSelector((state) => state.fiscalia);

    const obtenerTotalFiscalias = (busqueda, pagina, limite, departamento) => {
        dispatch(obtenerFiscalias(busqueda, pagina, limite, departamento));
    }

    const obtenerFiscIndividual = (id_fiscalia) => {
        dispatch(obtenerFiscaliaIndividual(id_fiscalia));
    }

    const obtenerFiscIndividual2 = (setValue, id_fiscalia) => {
        dispatch(obtenerFiscaliaIndividual2(setValue, id_fiscalia));
    }

    return {
        //valores
        fiscalias,
        cantidad,
        totalPaginas,
        loading,
        fiscaliaIndividual,

        //funciones
        obtenerTotalFiscalias,
        obtenerFiscIndividual,
        obtenerFiscIndividual2
    }
}
