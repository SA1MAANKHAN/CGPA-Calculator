import React from 'react'



import "./home.page.styles.scss"

import UniLogo from "../../assets/imgs/UniLogo.jpg"

function HomePage() {
    return (
        <div className="homePage">
            <div className="logo__container">
            <img src={UniLogo} alt="logo" />
            </div>
        </div>
    )
}

export default HomePage
