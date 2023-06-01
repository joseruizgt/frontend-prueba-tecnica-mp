import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';
import axios from 'axios';

const libraries = ['places'];

const mapContainerStyle = {
    width: '30%',
    height: '300px'
};

const options = {
    disableDefaultUI: true,
    zoomControl: true
};


export const Maps = () => {
    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState(null);
    const [center, setCenter] = useState({ lat: 15.4650586, lng: -90.38425269999999 })

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

    const convertAddressToCoordinates = async () => {
        try {
            const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: address,
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

    return (
        <div>
            <input
                type="text"
                placeholder="Ingrese una dirección"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <button onClick={convertAddressToCoordinates}>Mostrar mapa</button>
            {/* {coordinates && (
                <div>
                    <p>Latitud: {coordinates.latitude}</p>
                    <p>Longitud: {coordinates.longitude}</p>
                </div>
            )} */}
            {
                coordinates &&
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={15}
                    options={options}
                >
                    <Marker position={center} />
                </GoogleMap>
            }
        </div>
    );
};
