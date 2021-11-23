import React from 'react'
import './Textbox_Styled.css'


function Textbox() {
    return (
        <div className="textbox-container">
            <label className="textbox--color" for="suggestion">Do you have any comments or suggestions?</label><br />
            <textarea  className="textbox--input" type="text" id="suggestions" name="suggestions" placeholder="Share your suggestions"/>
            <p className="textbox--note textbox--color">The data you provide helps us improve our platform. <u>Find out more</u> if it is a legal case, you must <u>submit a legal removal request</u>.</p>
        </div>
    )
}

export default Textbox
