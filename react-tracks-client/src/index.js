import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import Auth from "./components/Auth";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql/",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Auth />
  </ApolloProvider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
