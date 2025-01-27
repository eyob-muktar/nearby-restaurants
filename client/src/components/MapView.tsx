'use client';
import { GoogleMap, InfoWindow, MarkerF } from '@react-google-maps/api';
import { Dispatch, SetStateAction, useCallback, useRef } from 'react';
import Image from 'next/image';

interface MapViewProps {
  places: Restaurant[];
  currentLatitude: number;
  currentLongitude: number;
  activePlaceId: number | null;
  setActivePlaceId: Dispatch<SetStateAction<number | null>>;
  setRadius: Dispatch<SetStateAction<number>>;
  setCurrentLatitude: Dispatch<SetStateAction<number>>;
  setCurrentLongitude: Dispatch<SetStateAction<number>>;
  zoom: number;
  setZoom: Dispatch<SetStateAction<number>>;
}

const defaultMapContainerStyle = {
  width: '100%',
  height: '100vh',
  borderRadius: '0px 0px 0px 15px',
};

//Map options
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
};

const MapView = ({
  places,
  currentLatitude,
  currentLongitude,
  activePlaceId,
  setActivePlaceId,
  setRadius,
  setCurrentLatitude,
  setCurrentLongitude,
  zoom,
  setZoom,
}: MapViewProps) => {
  const mapRef = useRef<google.maps.Map | null>(null);

  const handleBoundsChanged = () => {
    if (mapRef.current) {
      const map = mapRef.current;
      const bounds = map.getBounds(); // Get map bounds
      const center = map.getCenter(); // Get map center

      if (bounds && center) {
        const ne = bounds.getNorthEast(); // North-East corner of the bounds
        const radiusInMeters = Math.round(
          google.maps.geometry.spherical.computeDistanceBetween(center, ne)
        ); // Calculate radius (center to NE corner)
        const roundedRadius = Math.round(radiusInMeters / 100) * 100; //round so that we don't fetch often

        setRadius(roundedRadius);
      }
    }
  };
  const onLoad = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  const handleIdle = () => {
    if (mapRef.current) {
      const map = mapRef.current;
      const center = map.getCenter();

      if (center) {
        setCurrentLatitude(center.lat());
        setCurrentLongitude(center.lng);
      }
    }
  };

  const handleZoomChanged = useCallback(() => {
    if (mapRef.current) {
      const newZoom = mapRef.current.getZoom();
      if (newZoom) {
        setZoom(newZoom); // Update zoom in parent
      }
    }
  }, [setZoom]);

  return (
    <div className='w-full'>
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={{
          lat: currentLatitude,
          lng: currentLongitude,
        }}
        zoom={zoom}
        options={defaultMapOptions}
        onLoad={onLoad}
        onBoundsChanged={handleBoundsChanged}
        onIdle={handleIdle}
        onZoomChanged={handleZoomChanged}
      >
        {places?.length ? (
          places.map((place) => {
            return (
              <MarkerF
                position={{
                  lat: place.location.latitude,
                  lng: place.location.longitude,
                }}
                key={place.id}
                onClick={() => setActivePlaceId(place.id)}
              >
                {place.id === activePlaceId && (
                  <InfoWindow
                    options={{
                      headerContent: place.name,
                      maxWidth: 200,
                    }}
                    onCloseClick={() => setActivePlaceId(null)}
                  >
                    <Image
                      className='rounded-md w-[100%] h-auto'
                      alt='restaurant image'
                      width='300'
                      height='100'
                      src={place.image}
                    />
                  </InfoWindow>
                )}
              </MarkerF>
            );
          })
        ) : (
          <></>
        )}
      </GoogleMap>
    </div>
  );
};

export default MapView;
