import React from 'react';
import { Link } from 'react-router-dom';

// import ButtonLink from './components/ButtonLink';

import Button from '../Button';

import Logo from '../../assets/img/logo.png';

import './menu.css';

function Menu () {
    return (
        <nav className="Menu">
            <Link to="/">
              <img src={Logo} alt="LGFLIX" className="Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">Novo vídeo</Button>
        </nav>
    );
}

export default Menu;