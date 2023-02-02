import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker'; no needed in newer version
import 'tachyons';

const root = createRoot(document.getElementById('root'));

root.render(<App />)

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker(); no needed in newer version

