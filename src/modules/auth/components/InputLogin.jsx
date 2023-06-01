
export const InputLogin = ({ principalDesign, register, name, req = true, inputDesign, inputType = 'text', placeholder, errors }) => {
    return (
        <>
            <div className={principalDesign}>
                <input
                    {...register(name, {
                        required: {
                            value: req,
                            message: 'El campo es requerido'
                        }
                    })}
                    className={inputDesign} type={inputType} name={name} placeholder={placeholder} />
            </div>
            <div className="mb-4 text-center">
                {errors[name] && (
                    <span className="text-red-500 font-semibold">{errors[name].message}</span>
                )}
            </div>
        </>
    )
}
