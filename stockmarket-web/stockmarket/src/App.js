import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { HashRouter as Router } from "react-router-dom";
import MarketContextProvider from "./context/MarketContext";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Navbar from "components/navbar/Navbar";
import AppRouter from "routes/AppRouter";

Amplify.configure(awsExports);

function App() {
  return (
    <>
      <Authenticator>
        <Router>
          <MarketContextProvider>
            <Navbar />
            <AppRouter />
          </MarketContextProvider>
        </Router>
      </Authenticator>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);

export default App;
