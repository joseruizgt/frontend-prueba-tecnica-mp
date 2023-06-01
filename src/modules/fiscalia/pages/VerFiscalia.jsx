import { useFiscaliaSlice } from "../../../hooks";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import axios from 'axios';

const libraries = ['places'];

const mapContainerStyle = {
    width: '100%',
    height: '220px'
};

const options = {
    disableDefaultUI: true,
    zoomControl: true
};

export const VerFiscalia = () => {

    const { fiscaliaIndividual } = useFiscaliaSlice();
    const [coordinates, setCoordinates] = useState(null);
    const [center, setCenter] = useState(null)

    const convertAddressToCoordinates = async () => {

        try {
            const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: fiscaliaIndividual.direccion,
                    key: 'AIzaSyCMWgTPExf-f9BnRJLPVY31DcPzMUKWTGY'
                }
            });

            const data = response.data;

            if (data.results.length > 0) {
                const { lat, lng } = data.results[0].geometry.location;
                setCoordinates({ latitude: lat, longitude: lng });
                setCenter({ lat, lng })
            } else {
                console.error('No se encontraron coordenadas para la dirección especificada.');
            }
        } catch (error) {
            console.error('Error al convertir la dirección en coordenadas:', error);

        }
    };

    useEffect(() => {
        convertAddressToCoordinates()
        // eslint-disable-next-line
    }, [fiscaliaIndividual.direccion])


    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCMWgTPExf-f9BnRJLPVY31DcPzMUKWTGY',
        libraries
    });

    if (loadError) {
        return <div>Error al cargar los mapas</div>;
    }

    if (!isLoaded) {
        return <div>Cargando mapas...</div>;
    }

    return (
        <div>
            <div className="flex flex-wrap">

                <img className="h-[600px] w-[700px] rounded-xl mt-10 ml-10" src={fiscaliaIndividual.url_imagen} alt="imagen" />

                <div className="mt-10 ml-5">
                    <h1 className="text-3xl font-bold text-blue-950 uppercase">{fiscaliaIndividual.nombre_fiscalia}</h1>

                    <h1 className='text-2xl flex flex-wrap text-gray-600 font-bold mt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        Dirección
                    </h1>
                    <h1 className='text-3xl text-gray-600 ms-6 sm:text-base'>{fiscaliaIndividual.direccion}</h1>

                    <h1 className='text-xl flex flex-wrap text-gray-600 font-bold mt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        Teléfono
                    </h1>
                    <h1 className='text-3xl text-gray-600 ms-6 sm:text-base'>+502 {fiscaliaIndividual.telefono}</h1>

                    <h1 className='text-xl flex flex-wrap text-gray-600 font-bold mt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                        </svg>
                        Departamento
                    </h1>
                    <h1 className='text-3xl text-gray-600 ms-6 sm:text-base'>{fiscaliaIndividual.departamento}</h1>

                    <h1 className='text-xl flex flex-wrap text-gray-600 font-bold mt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>

                        Descripción
                    </h1>
                    <h1 className='text-3xl text-gray-600 ms-6 sm:text-base'>{fiscaliaIndividual.descripcion}</h1>

                    <h1 className='text-xl mb-1 flex flex-wrap text-gray-600 font-bold mt-5' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                        </svg>
                        Visualiar Mapa
                    </h1>

                    {
                        coordinates ?
                            <GoogleMap
                                mapContainerStyle={mapContainerStyle}
                                center={center}
                                zoom={15}
                                options={options}
                            >
                                <Marker position={center} />
                            </GoogleMap>
                            :
                            <GoogleMap
                                mapContainerStyle={mapContainerStyle}
                                center={center}
                                zoom={15}
                                options={options}
                            />

                    }

                </div>

            </div>
        </div>
    )
}
