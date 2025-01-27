'use client';

import { useQuery } from '@apollo/client';
import { GET_RESTAURANTS } from '../graphql/queries';
import { SidebarProvider, SidebarTrigger } from '../components/ui/sidebar';
import ListView from '../components/ListView';
import MapView from '../components/MapView';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const defaultCenter = { lat: 9.0312, lng: 38.7638 };

export default function Home() {
  const [currentLatitude, setCurrentLatitude] = useState<number>(
    defaultCenter.lat
  );
  const [currentLongitude, setCurrentLongitude] = useState<number>(
    defaultCenter.lng
  );

  const [activePlaceId, setActivePlaceId] = useState<number | null>(null);
  const [radius, setRadius] = useState<number>(5000);
  const [zoom, setZoom] = useState<number>(14);
  const [isLocationAccessed, SetIsLocationAccessed] = useState<boolean>(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      toast.error(
        'Geolocation is not supported by your browser! Using default location'
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLatitude(latitude);
        setCurrentLongitude(longitude);
        SetIsLocationAccessed(true);
      },
      (err) => {
        toast.error('Location access denied! Using default location');
        console.log({ err });
        SetIsLocationAccessed(false);
      }
    );
  }, []);

  const {
    data,
    loading,
    error: apiError,
  } = useQuery(GET_RESTAURANTS, {
    variables: {
      latitude: currentLatitude,
      longitude: currentLongitude,
      radius,
    },
    skip: !currentLatitude || !currentLongitude,
  });

  if (apiError) return <p>Error</p>;
  const places: Restaurant[] = data?.restaurants;
  return (
    <div className='bg-slate-100'>
      <SidebarProvider className='bg-slate-100'>
        <ListView
          places={places}
          activePlaceId={activePlaceId}
          setActivePlaceId={setActivePlaceId}
          loading={loading}
          isLocationAccessed={isLocationAccessed}
        />
        <SidebarTrigger />
        <MapView
          places={places}
          currentLatitude={currentLatitude}
          currentLongitude={currentLongitude}
          activePlaceId={activePlaceId}
          setActivePlaceId={setActivePlaceId}
          setRadius={setRadius}
          setCurrentLatitude={setCurrentLatitude}
          setCurrentLongitude={setCurrentLongitude}
          zoom={zoom}
          setZoom={setZoom}
        />
      </SidebarProvider>
    </div>
  );
}
