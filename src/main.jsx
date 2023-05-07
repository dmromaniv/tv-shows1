import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store.js";
import App from "./App.jsx";
import "./index.scss";

const basename = window.location.pathname;

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={basename}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);
