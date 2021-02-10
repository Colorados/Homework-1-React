import React from 'react';
import './Layout.css';

const Layout = (props) => {
    return (
        <header className="header container">
            <div className="logo">{props.logoPartOne} <span className="logo-span">{props.logoPartTwo}</span></div>
                <nav className="navbar">
                    <a href="#">{props.itemOne}</a>
                    <a href="#">{props.itemTwo}</a>
                    <a href="#">{props.itemThree}</a>
                </nav>
        </header>
    );
};

export default Layout;