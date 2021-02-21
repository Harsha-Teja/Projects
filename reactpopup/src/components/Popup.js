import React from "react"
import "./popup.css"

function Popup(props) {
    return (props.trigger) ? (
        <div>
            <div className='popup'>
                <div className="popup-inner"> 
                    <button className="btn-close" onClick={() => props.setTrigger(false)}> Close </button>
                    {props.children}
                </div>
            </div>
        </div>
    ) : (' ')
}

export default Popup