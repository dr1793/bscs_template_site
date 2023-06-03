import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BASE_CONTENTFUL_URL } from './constants';

const httpLink = createHttpLink({
    uri: `${BASE_CONTENTFUL_URL}${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;