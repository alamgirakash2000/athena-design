import React from 'react';
import NavBar from '../NavBar/NavBar';
import Bg from '../../../images/bg.png'
const Header = () => {
    return (
        <header className="heroArea">
            <NavBar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 heroInfo">
                            <h1 id='heroTitle'>Florence agency</h1>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever <br /> since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <button className="btn">See Pricing</button>
                        </div>
                        <div className="col-md-6 col-sm-12 offset-md-1">
                            <img className='img-fluid' src={Bg} alt="background"/>
                        </div>
                    </div>
                </div>
        </header>
    );
};

export default Header;