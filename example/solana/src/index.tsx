import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import '@solana/wallet-adapter-react-ui/styles.css';
import './index.css';

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('app')
);
