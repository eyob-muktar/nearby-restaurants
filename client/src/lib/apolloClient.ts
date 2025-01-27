import { ApolloClient, InMemoryCache } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    uri: process.env.API_END_POINT || 'http://localhost:4000/',
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
