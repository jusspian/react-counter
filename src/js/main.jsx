import React from 'react'
import ReactDOM from 'react-dom/client'



//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
/* import Home from './components/Home';
 */

import SecondsCounter from './components/SecondsCounter';
let SecondsElapsed = 0;

function updatecounter(){
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<SecondsCounter seconds={SecondsElapsed} />);
  SecondsElapsed++;
}

setInterval(updatecounter, 1000);
