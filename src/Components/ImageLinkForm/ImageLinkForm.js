import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className="center f3">
             {"This is magic brain will detect face in picture. Give it try."}
            </p>
            <div className="center form">
                <div className="center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" label="Paste Link here" type='tex'onChange={onInputChange}/>
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple bubbly-button" 
                        onClick={onButtonSubmit}>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;