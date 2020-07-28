import React from 'react';
import  { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';
import "./Menu.css"

function Menu() {
    return (
        <nav className="Menu">
            <Link to='/'>
                <img className="Logo" src={Logo} alt='AluraFlix logo' />
            </Link>

            <Button as={Link} className = "ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>



    );
}

export default Menu; //  importa o menu
