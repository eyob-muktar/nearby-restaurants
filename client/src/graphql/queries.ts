import { gql } from '@apollo/client';

export const GET_RESTAURANTS = gql`
  query GetRestaurants($latitude: Float!, $longitude: Float!, $radius: Float!) {
    restaurants(latitude: $latitude, longitude: $longitude, radius: $radius) {
      id
      name
      location {
        latitude
        longitude
      }
      address
      opening_hours
      image
    }
  }
`;
