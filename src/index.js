import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "/node_modules/flag-icon-css/css/flag-icons.min.css"
import 'tw-elements';
import App from './App';
import AppContext from "./context/AppContext";
import '../src/utils/i18next';


const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading...</h3>
  </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <AppContext>
        <App />
      </AppContext>
    </React.StrictMode>
  </Suspense>
);

