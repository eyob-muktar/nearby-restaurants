interface Restaurant {
  id: number;
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
  address: string;
  opening_hours: string;
  image: string;
}
