import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png";
import Search from "../assets/search.svg";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="Логотип" />
                    </Link>
                    <div className='name'>
                        <span>ЦЕНТР</span>
                        <span>ЕВРАЗИЙСКОГО </span>
                        <span>СОТРУДНИЧЕСТВА</span>
                    </div>
                </div>
                <nav className="nav">
                    <ul>
                        <li><Link className="header-text" to="#">Меню</Link></li>
                        <li><Link to="#">Личный кабинет</Link></li>
                        <li><Link to="#">Вступить в палату</Link></li>
                        <li><Link to="/calendar">Календарь мероприятий</Link></li>
                        <li><Link to="/subscribe">Подписаться на рассылку</Link></li>
                    </ul>
                </nav>
                <div className="searchLogo">
                    <img src={Search} alt="Поиск" />
                </div>
            </div>
        </header>
    );
};

export default Header;