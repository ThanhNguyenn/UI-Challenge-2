import React from 'react'
import './Button_Styled.css'
function Button() {
    return (
        <div className="button--container">
            <button className="button--general button--cancel">Cancel</button>
            <button className="button--general button--submit">Submit</button>
        </div>
    )
}

export default Button
