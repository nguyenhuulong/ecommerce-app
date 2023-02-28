import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./redux/store";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./sass/index.scss";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routing/Routing";

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
