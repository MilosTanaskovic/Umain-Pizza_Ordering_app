import React, {useState, useEffect} from 'react'
import { GeoLocationType } from '../models/geoLocation';



const useGeoLocation = () => {
    const [location, setLocation] = useState<GeoLocationType>({
        loaded: false,
        coordinates: {lat: 0, lng: 0},
    });

    const onSuccess = (location: any) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            }
        })
    };

    const onError = (error: any) => {
        setLocation({
            loaded: true,
            ...error,       
        });
    }

    useEffect(() => {
        if(!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation is not supported by your browser"
            })
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        
    }, [])

    return location;
}

export default useGeoLocation;