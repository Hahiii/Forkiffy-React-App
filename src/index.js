import React from 'react';
import ReactDOM from 'react-dom';
import Auth from "./components/auth";
import App from './App';

let elem = <Auth />;

if (window.location.pathname === "/") {
    elem = <Auth />;
} else {
    elem = (
        <React.StrictMode>
          <App />
        </React.StrictMode>
    )
}


ReactDOM.render(elem, document.getElementById('root')
);
