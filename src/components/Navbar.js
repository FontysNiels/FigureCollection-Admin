import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {


    return (
        <>
            <nav className='navbarFigures'>
                <div className="row">
                    <div className="float-left">
                        <Link to="/" className='navbar-logo'>
                            Figures Collection&#8482;
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar