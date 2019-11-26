import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">
      	<nav>
	      	<ul className="right">
	      		<li><a href="#">Donate</a></li>
	      		<li><a href="#">Blog</a></li>
	      		<li><a href="#">Find farm</a></li>
	      	</ul>
	    </nav>
      </div>
      <div className="Search">
      	<div id="left-col" className="col" style={{"width": "34%"}}>
      		<label for="country"></label>
      		<select name="country">
      			<option value="USA">USA</option>	
      			<option value="Russia">Russia</option>	
      		</select>
      		<button>Search</button>
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
