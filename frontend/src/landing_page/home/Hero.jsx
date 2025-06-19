import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src="media/image/homeHero.png" alt="not found" className='mb-5'/>
            </div>
            <h1 className='mt-5 d-flex justify-content-center'>Invest in everything</h1>
            <p className='d-flex justify-content-center'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='d-flex p-2 btn btn-primary fs-5 mb-5 justify-content-center' style={{width:"20%", margin: "0 auto"}}>Sign up for free</button>
        </div>
     );
}

export default Hero;