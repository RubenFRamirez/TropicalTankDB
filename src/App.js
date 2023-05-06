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
      
      <div className="Body" styles="background-image: url(http://tinypic.com/i/tp-logo.jpg)">
        <div className="body-goby">
            <h2> Bumblebee Goby</h2>
            <p><em><strong>Brachygobius xanthozonus</strong></em></p>
            <p> The Freshwater Bumblebee Goby is very small, but it certainly has a personality that can sometimes be very consistent with its “grumpy” facial appearance.  It will swim around all levels of the entire aquarium, but it often will claim and guard a small territory, especially from its own kind. </p>
        </div>
      
      <div className="body-angel">
            <h2> Angel Fish</h2>
            <p><em><strong>Brachygobius xanthozonus</strong></em></p>
            <p> The Freshwater Bumblebee Goby is very small, but it certainly has a personality that can sometimes be very consistent with its “grumpy” facial appearance.  It will swim around all levels of the entire aquarium, but it often will claim and guard a small territory, especially from its own kind. </p>
        </div>
      
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
