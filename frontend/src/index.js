import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "react-apollo";
import client from "./utils/apolloClient";

import App from "./containers/App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.render(
    <Router>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Router>,
    document.getElementById( "root" )
);