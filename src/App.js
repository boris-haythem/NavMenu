import React from 'react';
import Nav from './components/nav'
import './App.css';

const navitems=[{name:'Home'},{name:'Services',drop:['For entrepreneurs','For students','For hobbyists']},{name:'Contact'}]
function App() {
  return (
    <div className="App">
    <Nav navmenu={navitems}/>
    </div>
  );
}

export default App;
