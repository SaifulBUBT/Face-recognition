import React from 'react';

import './ImageLinkForm.css';

const ImageLinkForm = (props) =>{
    return (
     <div>
         <p className=" white f3">This magic brain will detect faces in your pictures, Get it a try.</p>
    <div className="mw7 center pa4 br2-ns ba b--black-10 form"> {/**do not user <form> tag */}
            <div className="cf">
            
                <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Enter Your Image URL" type="text" onChange={props.onInputChange}/>
        
                <button 
                className="f6 f5-l button-reset fl pv3 tc bn bg-black-80  white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                onClick={props.onButtonSubmit}
                >
                Detect
                </button>
            </div>
           
        </div>
      </div>
    )
}


export default ImageLinkForm;