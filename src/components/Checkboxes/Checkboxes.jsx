import React from 'react'
import './Checkboxes_Styled.css'
function Checkboxes() {

    return (
        <div className="checkbox--container">
           <li>
           <label for="useful" className="checkbox--align-items">
                <input className="checkbox--hide-old-checkbox" type="radio" name="radio" id="useful" />
                <div className="checkbox--new-radio"></div>     
                Useful
            </label>
           </li>

           <li>
           <label for="wrong" className="checkbox--align-items">
                <input className="checkbox--hide-old-checkbox" type="radio" name="radio" id="wrong" />
                <div className="checkbox--new-radio"></div>
                Something is wrong
                </label>
           </li>

           <li>
           <label for="not_relevant" className="checkbox--align-items">
                <input className="checkbox--hide-old-checkbox" type="radio" name="radio" id="not_relevant" />
                <div className="checkbox--new-radio"></div>   
                This is not relevant
             </label>
           </li>

           <li>
           <label for="not_useful" className="checkbox--align-items">
                <input className="checkbox--hide-old-checkbox" type="radio" name="radio" id="not_useful" />
                <div className="checkbox--new-radio"></div>   
                This is not useful
            </label>
        </li>
        </div>
    )
}

export default Checkboxes
