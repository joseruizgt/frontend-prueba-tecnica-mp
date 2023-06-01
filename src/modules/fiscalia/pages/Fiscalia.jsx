import { useForm } from "react-hook-form";
import { ButtonLink, InputSearch, Loader, Pagination, TransitionPopover } from "../../../ui"
import { TdTable } from "../components"
import { useFiscaliaSlice } from "../../../hooks";
import { useEffect, useState } from "react";
import { VerFiscalia } from "./VerFiscalia";
import { encryptId, questionModal } from "../../../utils";
import { useDispatch } from "react-redux";
import { eliminarFiscalia } from "../../../store/slice/fiscalia";
import { NavLink } from "react-router-dom";

export const Fiscalia = () => {

    const { fiscalias, totalPaginas, loading, obtenerTotalFiscalias, obtenerFiscIndividual } = useFiscaliaSlice();
    const [page, setPage] = useState(1);
    const { register, watch } = useForm();
    const [show, setShow] = useState(false)
    const [loader, setLoader] = useState(false);
    const dispatch = useDispatch();
    let watchItems = watch();

    const fiscaliaIndividual = (id_fiscalia) => {
        obtenerFiscIndividual(id_fiscalia);
        setShow(true);
    }

    useEffect(() => {
        obtenerTotalFiscalias(watchItems.buscador, page, 5);
        // eslint-disable-next-line
    }, [page, watchItems.buscador]);

    useEffect(() => {
        setPage(1);
    }, [watchItems.buscador]);

    return (
        <div>
            {loading && <Loader />}
            {loader && <Loader />}
            <div className="flex justify-center  mt-14">
                <div className='sm:flex justify-between w-5/6'>
                    <InputSearch register={register} name="buscador" position='md:w-1/4 md:mb-0 mb-4 font-semibold text-gray-600' />
                    <ButtonLink bgColor='bg-blue-900' bgText='text-white' hoverColor='hover:bg-blue-800' title={
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Crear Fiscalía
                        </div>

                    } direccion='/fiscalia/crear' />
                </div>
            </div>

            <div className="overflow-x-auto mt-2">
                <div className="  flex items-center justify-center font-sans overflow-hidden">
                    <div className="w-auto lg:w-5/6">
                        <div className="bg-white shadow-md rounded my-6">
                            <table className="min-w-max w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-center">Fiscalía</th>
                                        <th className="py-3 px-6 text-center">Teléfono</th>
                                        <th className="py-3 px-6 text-center">Dirección</th>
                                        <th className="py-3 px-6 text-center">Departamento</th>
                                        <th className="py-3 px-6 text-center">Imagen</th>
                                        <th className="py-3 px-6 text-center">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                    {
                                        fiscalias.length === 0 ?
                                            <tr>
                                                <td>
                                                    <div className=' text-center font-bold text-gray-400 m-4'>No existen registros de Fiscalías</div>
                                                </td>
                                            </tr>
                                            :
                                            fiscalias.map((item, index) => (
                                                <tr key={index} className={`"border-b border-gray-200 ${index % 2 > 0 ? 'bg-gray-50' : ''} hover:bg-gray-100"`}>
                                                    <TdTable valor={item.nombre_fiscalia} />
                                                    <TdTable valor={item.telefono} />
                                                    <TdTable valor={item.direccion} />
                                                    <TdTable valor={item.departamento} />
                                                    <TdTable valor={<img className="h-12 w-12" src={item.url_imagen} alt="mp" />} />
                                                    <TdTable valor={<>
                                                        <div className="w-4 mr-3 transform hover:text-green-500 hover:scale-110 ">
                                                            <svg onClick={() => fiscaliaIndividual(item.id_fiscalia)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 cursor-pointer">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            </svg>

                                                        </div>
                                                        <div className="w-4 mr-3 transform hover:text-yellow-500 hover:scale-110">
                                                            <NavLink to={`/fiscalia/editar/${encryptId(item.id_fiscalia)}`}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 cursor-pointer">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                                                </svg>
                                                            </NavLink>

                                                        </div>
                                                        <div className="w-4 transform hover:text-red-500 hover:scale-110">
                                                            <svg onClick={() => questionModal('¡Confirmar eliminación!', '¿Está seguro que desea eliminar este registro?', dispatch(() => eliminarFiscalia(() => dispatch(() => obtenerTotalFiscalias(watchItems.buscador, page, 5)), item.id_fiscalia, setLoader)))} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 cursor-pointer">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                            </svg>

                                                        </div>
                                                    </>} />
                                                </tr>
                                            ))
                                    }

                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-end">
                            <Pagination totalPages={totalPaginas} actualPage={page} onChange={(newPage) => setPage(newPage)} />
                        </div>
                        <TransitionPopover title='Detalles' show={show} setShow={setShow} >
                            <VerFiscalia />
                        </TransitionPopover>
                    </div>
                </div>
            </div>
        </div>
    )
}
