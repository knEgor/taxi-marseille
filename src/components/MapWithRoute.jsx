import { GoogleMap, LoadScript, DirectionsRenderer } from '@react-google-maps/api';
import { useState, useEffect } from 'react';

export default function MapWithRoute() {
  const [directions, setDirections] = useState(null);
  const center = { lat: 43.2965, lng: 5.3698 }; 

  useEffect(() => {
    if (!window.google) return;
    const service = new window.google.maps.DirectionsService();
    service.route(
      {
        origin: 'Marseille, France',
        destination: 'Cassis, France',
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === 'OK') setDirections(result);
        else console.error('Directions error:', status);
      }
    );
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}>
      <GoogleMap center={center} zoom={12} mapContainerStyle={{ height: '500px', width: '100%' }}>
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
}
