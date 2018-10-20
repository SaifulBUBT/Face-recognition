import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = (props) =>{
    return (
     <div className="center ma">
        <div className="mt2 position">
            <img id="inputimage" src={props.imageUrl} alt=" " width="500px" height="auto"  />
            <div className="bounding-box" style={{top: props.box.topRow, bottom: props.box.bottomRow, left: props.box.leftCol,right: props.box.rightCol}}>
             
            </div>

       </div>
      </div>
    )
}


export default FaceRecognition;