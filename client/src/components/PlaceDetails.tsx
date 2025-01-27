import * as React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Clock, MapPin } from 'lucide-react';

interface PlaceCardProps {
  place: Restaurant;
  isActive: boolean;
}

export function PlaceCard({ place, isActive }: PlaceCardProps) {
  return (
    <Card
      className={
        isActive
          ? 'shadow-lg transform scale-105 my-5 mx-4'
          : 'shadow-lg m-3 rounded-md'
      }
    >
      <CardHeader className='p-0 pb-3'>
        <Image
          className='rounded-md w-[100%] h-auto'
          alt='restaurant image'
          width='300'
          height='100'
          src={place.image}
        />
      </CardHeader>
      <CardContent className='px-3'>
        <CardTitle className='font-thin text-gray-700 text-lg pb-2'>
          {place.name}
        </CardTitle>
        <CardDescription>
          <div className='flex flex-row justify-between align-'>
            <Clock size='15px' />
            <span>{place.opening_hours}</span>
          </div>
          <div className='flex flex-row justify-between align-'>
            <MapPin size='15px' />
            <p>{place.address}</p>
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
