'use client';
import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import { ReactNode } from 'react';
import Loading from '../components/Loading';

const libraries = ['places', 'drawing', 'geometry'];

// Define a function component called MapProvider that takes a children prop
export function MapProvider({ children }: { children: ReactNode }) {
  // Load the Google Maps JavaScript API asynchronously
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
    libraries: libraries as Libraries,
  });
  if (loadError) return <p>Encountered error while loading google maps</p>;

  if (!scriptLoaded) return <Loading />;

  // Return the children prop wrapped by this MapProvider component
  return children;
}
