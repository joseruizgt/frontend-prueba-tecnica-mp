import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { InputImage, InputNumber, InputText, Loader, SelectOption, TextArea } from "../../../ui";
import { useState } from "react";
import { crearFiscalia } from "../../../store/slice/fiscalia/thunks";
import { useDispatch } from "react-redux";
const GT = require("territory-gt");

export const CrearFiscalia = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [fileList, setFileList] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            {loading && <Loader />}
            <div className="text-center mt-10 mb-4">
                <h2 className="sm:text-4xl text-[25px] tracking-tight text-blue-900 font-bold">
                    CREAR FISCALÍA
                </h2>
            </div>
            <div className={`flex justify-center my-2 px-0 md:mx-0 mb-5`}>
                <form className="w-full max-w-4xl bg-white rounded-lg shadow-2xl p-6" onSubmit={handleSubmit((data) => dispatch(crearFiscalia(data, reset, fileList, setFileList, setLoading, navigate)))}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <InputText nameLabel='Nombre de la Fiscalía' register={register} name="nombre_fiscalia" message="El nombre es requerido" errors={errors} position="md:w-1/2" Placeholder="Fiscalia distrital de Alta Verapaz" />
                        <InputNumber nameLabel='Teléfono' register={register} name="telefono" message="El teléfono es requerido" errors={errors} position="md:w-1/2" Placeholder="58980727" />
                        <InputText nameLabel='Dirección' register={register} name="direccion" message="La dirección es requerida" errors={errors} position="md:w-1/2" Placeholder="2a Avenida 4-41 Zona 2" />
                        <SelectOption nameLabel='Departamento' register={register} name='departamento' message='El departamento es requerido' errors={errors} array={GT.departamentos()} position="md:w-1/2" />
                        <TextArea nameLabel='Descripción' register={register} name="descripcion" errors={errors} />
                        <InputImage fileList={fileList} setFileList={setFileList} />
                        <div className="w-full md:w-full px-3 mb-6">
                            <div className="mb-6 text-center flex">
                                <input
                                    className="w-full mr-1 px-3 py-2 font-bold text-white bg-blue-900 rounded-md cursor-pointer hover:bg-blue-800 focus:outline-none focus:shadow-outline"
                                    type="submit"
                                    value='Crear'
                                />
                                <Link to='/fiscalia' className="w-full px-4 py-2 bg-red-700 rounded-md cursor-pointer hover:bg-red-600 focus:outline-none focus:shadow-outline">
                                    <button className="font-bold text-white">
                                        Cancelar
                                    </button>
                                </Link>
                            </div>
                            <hr className="border-t" />
                        </div>
                        <div className="mx-auto -mb-6 pb-1">
                            <span className="text-center text-xs text-gray-700">Ministerio Público</span>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
