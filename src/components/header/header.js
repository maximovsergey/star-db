import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <h3>
                <a href="#">Star DB</a>
            </h3>
            <div className="menu">
                <div className="menu-item">
                    <a href="#">People</a>
                </div>
                <div className="menu-item">
                    <a href="#">Planets</a>
                </div>
                <div className="menu-item">
                    <a href="#">StarShips</a>
                </div>
            </div>
        </div>
    )
}
export default Header;