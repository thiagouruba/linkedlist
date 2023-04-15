import { useState } from "react";
import './NavBar.scss';
import logo from '../../../img/logo.png';

export default function NavBar() {

    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        setIsActive(current => !current);
    };

    return (
        <div id="header">
            <a href="/"><img src={logo} alt="logo" className="logo"></img></a>
            <nav id="nav" className={isActive ? 'active' : ''} onClick={handleClick}>
                <button id='btn-mobile'>
                    <span id='hamburguer'></span></button>
                <ul id="menu">
                    <li><a href='/how-works'>Como funciona</a></li>
                    <li><a href='/questions'>Perguntas frequentes</a></li>
                    <li><a href='/price'>Preço</a></li>
                    <li><a href='/login'>Entrar</a></li>
                    <li><a href='/register'>Cadastrar</a></li>
                </ul>
            </nav>
        </div>
    );

}