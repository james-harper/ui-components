import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons'; // eslint-disable-line import/extensions
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
