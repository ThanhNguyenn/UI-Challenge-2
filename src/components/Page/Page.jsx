import React from 'react'
import Header from '../Header/Header'
import Checkboxes from '../Checkboxes/Checkboxes'
import Textbox from '../Textbox/Textbox'
import Button from '../Button/Button'
import './Page_Styled.css';


function Page() {
    return (
        <div className="page--container">
            <div className="page--inner-container">
                <Header />
                <Checkboxes />
                <Textbox />
                <Button />
            </div>
        </div>
    )
}

export default Page
