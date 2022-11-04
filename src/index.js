import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataParser } from './modules/dataParser';
import { AuctionsFilter } from "./modules/auctionsHandler";
import { AHEngine } from "./modules/auctionsHandler/engine";
import { AuthToken } from './modules/dataParser/authtoken';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

class Main {
    static init() {
        AHEngine.init();
    }
}

Main.init();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();