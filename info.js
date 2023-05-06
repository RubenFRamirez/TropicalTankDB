import React from 'react';
import Fish from './fish-db';
 
function Info (props){
  return (
    <div className ="Parent">
     
        <div className = "testing" style={{border:'1px solid black',
                     margin:'10px',width:'20%'}}>
      
 
            <h1> {props.name} </h1>
            <p className = "testing"><em><strong> {props.latinname} </strong></em></p>
            <p> {props.info} </p>

        </div>
     </div>
 
  )
}
export default Info;