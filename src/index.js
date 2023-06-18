import React from "react";
import { createRoot } from "react-dom/client";

import { configureClient } from "./api/client";
import storage from "./utils/storage";
import "./index.css";
import App from "./components/app";

import Root from "./Root";
import configureStore from "./store";

const accessToken = storage.get("auth");
configureClient({ accessToken });

const store = configureStore({ auth: !!accessToken });

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root store={store}>
      <App />
    </Root>
  </React.StrictMode>
);
