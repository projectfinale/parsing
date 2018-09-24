import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


library.add(
  faGithub
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
