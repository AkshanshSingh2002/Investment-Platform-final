import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src="media/image/largestBroker.svg" alt="" />
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail of the volume in India daily by and investing in:</p>
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity and Derivatives</p>
                                </li>
                                <li>
                                    <p>Currency Derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Direct Mutual Funds</p>
                                </li>
                                <li>
                                    <p>Stockes and IPOs</p>
                                </li>
                                <li>
                                    <p>Bonds and Gold</p>
                                </li>
                            </ul>
                        </div>
                        <img src="media/image/pressLogos.png" style={{width:"90%"}} alt="Press Logos not found" />
                    </div>
                </div>
            </div>      
        </div>
    );
}

export default Awards;