import React from 'react';
import { useState } from 'react';
import Fish from './fish-db';

function Info (props){
    const [isHover, setIsHover] = useState(false);

const handleMouseEnter = () => {
  setIsHover(true);
};

const handleMouseLeave = () => {
  setIsHover(false);
};

const boxStyle = {
  border:'1px solid black',
  cursor: 'pointer',
  //backgroundImage: "url("+props.image+")",
  backgroundRepeat:"no-repeat",
  backgroundImage: isHover ? `linear-gradient(to right, transparent, black), url(${props.image})` : "url("+props.image+")",

  //backgroundImage: 'linear-gradient(to right, white, rgba(0, 133, 255, 1))',
  //backgroundImage: `linear-gradient(to right, transparent, black), 
//url(${props.image})`,
  color: isHover ? 'antiquewhite' : 'transparent',
};
    
  return (
    <div className ="Parent">
        <div className = "testing" style={boxStyle} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
      
            <span className = 'speciesHeader'>
                <h1> {props.name} </h1>
                <p><em><strong> {props.latinname} </strong></em></p>
            </span>
      
            <p> {props.info} </p>
            
        </div>
     </div>
 
  )
}
export default Info;