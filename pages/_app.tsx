import type { AppProps } from "next/app";
import apollo_client from "../apollo";
import { ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apollo_client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
