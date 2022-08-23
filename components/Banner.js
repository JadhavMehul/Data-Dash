import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Data Dash</h1>
                            <h5>Data Data is a platform which predicts stock marker trends and signals and provide it for free.</h5>
                            <button className="btn banner_btn px-4 mx-2">Login</button>
                            <button className="btn banner_btn1 px-4 mx-2">Register</button>
                        </div>
                        <div className="col-md-6">
                            <div className="banner_right">
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#D0E2FF" d="M40.1,-69.5C49.4,-64.2,52.4,-48.1,53.6,-34.7C54.8,-21.3,54.2,-10.7,52.3,-1.1C50.3,8.4,46.9,16.8,43.9,27C40.8,37.2,38.1,49.2,30.8,57.4C23.6,65.7,11.8,70.2,-1.4,72.7C-14.7,75.2,-29.3,75.7,-42.8,71.1C-56.3,66.4,-68.5,56.5,-72,43.8C-75.5,31.1,-70.2,15.5,-66.8,2C-63.3,-11.6,-61.7,-23.1,-55.3,-30.9C-49,-38.6,-37.9,-42.6,-27.9,-47.4C-17.9,-52.3,-9,-58.1,3.2,-63.7C15.4,-69.3,30.9,-74.8,40.1,-69.5Z" transform="translate(100 100)" />
                                </svg>
                               <img src="./images/mobile.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
