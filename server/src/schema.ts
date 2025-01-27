import { Restaurant } from '@prisma/client';
import { prisma } from './db.js';

export const typeDefs = `#graphql
 type Location {
    latitude: Float
    longitude: Float
  }

  type Restaurant {
    id: Float
    name: String
    location: Location
    address: String
    opening_hours: String
    image: String
  }

  type Query {
    restaurants(latitude: Float!, longitude: Float!, radius: Float!): [Restaurant]
  }

  type Mutation {
    createRestaurant: Restaurant
  }
`;

export const resolvers = {
  Query: {
    restaurants: async (
      parent,
      args: { latitude: number; longitude: number; radius: number }
    ) => {
      const results = await prisma.$queryRaw<
        {
          id: number | null;
          name: string | null;
          location: string | null;
          address: string | null;
          opening_hours: string | null;
          image: string | null;
        }[]
      >`SELECT  id, name, ST_AsGeoJson(location) as location, address, opening_hours, image
        FROM "Restaurant"
      WHERE (ST_DWithin(
        location,
        ST_Point(${args.longitude}, ${args.latitude})::geography, ${args.radius}))
      ORDER BY ST_DISTANCE(location, ST_Point(${args.longitude}, ${args.latitude})::geography)`;
      const restaurants: Restaurant[] = results.map((result) => {
        const { location, ...rest } = result;
        const geography = JSON.parse(location);
        return {
          ...rest,
          location: {
            latitude: geography.coordinates[1],
            longitude: geography.coordinates[0],
          },
        };
      });
      return restaurants;
    },
  },
  Mutation: {
    createRestaurant: async (parent, args) => {
      const point = `POINT(${args.location.lng} ${args.location.lat})`;
      await prisma.$queryRaw`
        INSERT INTO "Restaurant" (name, location, address, opening_hours)  VALUES ('The Gourmet Spot', 
          ST_GeomFromText(${point}, 4326),  
        '123 Foodie Lane, New York, NY 10001', 
        'Mon-Sun: 11:00 AM - 11:00 PM', 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg');`;
    },
  },
};
