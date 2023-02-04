import { ApolloClient, InMemoryCache } from "@apollo/client";

const apollo_client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache(),
});

export default apollo_client;
