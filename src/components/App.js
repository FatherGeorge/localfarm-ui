import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">
      	<nav>
	      	<ul className="right">
	      		<li>Donate</li>
	      		<li>Blog</li>
	      		<li>Find farm</li>
	      	</ul>
	    </nav>
      </div>
      <div className="Search">
      	<div id="left-col" className="col" style={{"width": "34%"}}>
      		Left
      	</div>
      	<div id="right-col" className="col" style={{"width": "65%"}}>
      		Right
      	</div>
      </div>
      <div className="Footer">Footer</div>
    </div>
  );
}

export default App;
