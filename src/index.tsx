import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ValidacionFormulario from "./components/ValidacionFormulario";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="container">
      <ValidacionFormulario />
      <App />
    </div>
  </React.StrictMode>
);

