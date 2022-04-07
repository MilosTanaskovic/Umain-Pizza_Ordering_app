export interface GeoLocationType {
    loaded?: boolean;
    coordinates: { lat: number; lng: number; };
    error?: any;
}