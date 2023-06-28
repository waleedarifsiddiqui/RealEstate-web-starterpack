import React from 'react';
import './header.css';

const Header = () => (
    <div class="parentContainer">
    <img src="Home.png" alt="Landscape" />
    <div class="centered">Centered</div>
    <div class="bottom-left">"An Ambition as High as <br /> the Sky"</div>
    <div class="top-left">
        <img src="white_full.png" alt="logo"/>
    </div>
    <div class="top-right">Top Right</div>
    <div class="bottom-right">Bottom Right</div>
    </div>
);

export default Header;

