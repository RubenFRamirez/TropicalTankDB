import logo from './mask.webp';
import discus from './discus.png';
import nuclear from './logo.svg';
import './App.css';

import Fish from './fish-db.js';
import Info from './info.js';



function App() {
  return (

    <div className="App">
      <header className="header">
        <img src={discus} className="App-logo" alt="logo" />
        <h1>
          Dagobah Tropical Tank
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      
      <div className="Body">
        
        <p>testing body</p>
          {Fish.map((e)=>{
           return (
           <Info name={e.name} latinname={e.latinname} info={e.info} image={e.image}/>
         );})}

      </div>
      
    </div>
     
  );
}

export default App;
