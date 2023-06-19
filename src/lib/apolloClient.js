import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { BASE_CONTENTFUL_URL } from "./constants";

const httpLink = new HttpLink({
    uri: `${BASE_CONTENTFUL_URL}${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
        },
    };
});

const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });
});

export const getRevalidateQuery = async (query, variables = {}) => {
    return await getClient().query({
        query,
        context: {
        ...variables,
        fetchOptions: {
            next: { revalidate: 5 },
        },
    },
    });
};
