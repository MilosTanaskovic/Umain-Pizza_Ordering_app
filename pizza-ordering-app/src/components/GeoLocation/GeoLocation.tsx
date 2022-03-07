import React from 'react';
import { GeoLocationType } from '../../models/geoLocation';
import './GeoLocation.css';

interface Props {
    location: GeoLocationType;
}

const GeoLocation = ({location}: Props) => {
    return (
        <div className='geo-location'>
            {
                location?.loaded 
                ?   <p>{JSON.stringify(location)}</p>
                :   <p>Location data not available yet!</p>

            }
        </div>
    )
}

export default GeoLocation;
