import * as React from 'react';
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import { Routes } from "./router";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Routes />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);