import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
// import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App/>, document.getElementById('root'));

//this loads the manifest.json data everytime
//need to set this to register for a faster/offline app
// serviceWorker.unregister()
