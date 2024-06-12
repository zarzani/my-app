import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import Product from "./component/product";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <Product/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();