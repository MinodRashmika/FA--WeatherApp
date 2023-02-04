import React from 'react';
import {CookiesProvider} from 'react-cookie';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ThemeProvider } from '@material-tailwind/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CookiesProvider>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </CookiesProvider>
);

