
export const Card = ({imagen, titulo, direccion, telefono, funcion}) => {
    return (
        <div className="max-w-sm bg-white hover:bg-sky-50 border border-gray-200 rounded-xl shadow-xl shadow-gray-300 m-5">
            <img className="rounded-t-lg" src={imagen} alt="imagen" />
            <div className="px-3 py-2">
                <h5 className="mb-2 sm:text-xl text-lg font-bold tracking-tight text-center text-blue-950 ">{titulo}</h5>
                <hr className="mb-2" />
                <div>
                    <h3 className='flex flex-wrap text-gray-600 font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        Dirección
                    </h3>
                    <h2 className='text-gray-600 ms-6 text-xs sm:text-base'>{direccion}</h2>
                </div>

                <div className='mt-2'>
                    <h3 className='flex flex-wrap text-gray-600 font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        Teléfono
                    </h3>
                    <h2 className='text-gray-600 ms-6 text-xs sm:text-base'>{telefono}</h2>
                </div>


                <button onClick={() => funcion()} className="inline-flex items-center px-3 py-2 mt-5 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Detalles
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                    </svg>

                </button>

            </div>
        </div>
    )
}
