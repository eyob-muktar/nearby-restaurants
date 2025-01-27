import { Dispatch, SetStateAction } from 'react';
import { PlaceCard } from './PlaceDetails';
import { Sidebar, SidebarContent, SidebarHeader } from './ui/sidebar';
import { Skeleton } from './ui/skeleton';
import { Separator } from './ui/separator';

interface ListViewProps {
  places: Restaurant[];
  activePlaceId: number | null;
  setActivePlaceId: Dispatch<SetStateAction<number | null>>;
  loading: boolean;
  isLocationAccessed: boolean;
}

const LoadingSkeleton = () => {
  return <Skeleton className='w-[90%] h-[150px] rounded-md mx-[5%]' />;
};

const ListView = ({
  places,
  activePlaceId,
  setActivePlaceId,
  loading,
  isLocationAccessed,
}: ListViewProps) => {
  return (
    <Sidebar className='bg-slate-100'>
      <SidebarHeader className='bg-slate-100'>
        <h2 className='text-center text-2xl font-medium text-gray-800'>
          Restaurants {isLocationAccessed ? 'Nearby' : 'In Addis'}
        </h2>
      </SidebarHeader>
      <Separator />
      <SidebarContent className='bg-slate-100'>
        {!loading
          ? places?.map((place) => (
              <div
                key={place.id}
                onClick={() => setActivePlaceId(place.id)}
              >
                <PlaceCard
                  isActive={activePlaceId === place.id}
                  place={place}
                />
              </div>
            ))
          : Array.from([1, 2, 3, 4], (x) => <LoadingSkeleton key={x} />)}
      </SidebarContent>
    </Sidebar>
  );
};

export default ListView;
