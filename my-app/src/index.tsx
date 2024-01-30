import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider} from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import { persistStore } from 'redux-persist';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    <ToastContainer/>
  </ChakraProvider>
);
