export interface GeoLocationType {
    loaded?: boolean;
    coordinates: { lat: string; lng: string; };
    error?: any;
}