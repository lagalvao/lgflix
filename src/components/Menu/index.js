import React from 'react';

// import ButtonLink from './components/ButtonLink';

import Button from '../Button';

import Logo from '../../assets/img/logo.png';

import './menu.css';

function Menu () {
    return (
        <nav className="Menu">
            <a href="/">
              <img src={Logo} alt="LGFLIX" className="Logo" />
            </a>

            <Button as="a" className="ButtonLink" href="">Novo vídeo</Button>
        </nav>
    );
}

export default Menu;