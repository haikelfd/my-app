import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Hello/>,document.getElementById('root')
);
serviceWorker.unregister();
