import React from 'react';
import LogoX from '../assets/social-icons-x-twitter.svg'
import LogoIn from '../assets/social-icons-linkedin.svg'
import LogoYouTube from '../assets/social-icons-youtube.svg'
import LogoTelegram from '../assets/social-icons-telegram.svg'
import LogoVK from '../assets/social-icons-vk.svg'
import Logo from "../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="Логотип" />
          <div className='name'>
            <span>ЦЕНТР</span>
            <span>ЕВРАЗИЙСКОГО </span>
            <span>СОТРУДНИЧЕСТВА</span>
          </div>
        </div>
        <div className="footer-contact">
          <p>101000, Москва, Милютинский переулок, д.10, стр. 1</p>
          <p>+7 (495) 721-38-28</p>
          <p><a href="mailto:info@ccifr.ru">info@ccifr.ru</a></p>
          <div className="footer-social">
            <a href="#"><img src={LogoX} alt="X" /></a>
            <a href="#"><img src={LogoIn} alt="In" /></a>
            <a href="#"><img src={LogoYouTube} alt="YouTube" /></a>
            <a href="#"><img src={LogoTelegram} alt="Telegram" /></a>
            <a href="#"><img src={LogoVK} alt="VK" /></a>
          </div>
        </div>
        <nav className="footer-nav">
          <ul>
            <li><a href="#">Меню</a></li>
            <li><a href="#">Личный кабинет</a></li>
            <li><a href="#">Вступить в палату</a></li>
            <li><a href="/calendar">Календарь мероприятий</a></li>
            <li><a href="/subscribe">Подписаться на рассылку</a></li>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>© CCI France Russie, 2024. Все права защищены. Воспроизведение материалов данного сайта без разрешения правообладателя запрещено.</p>
        <a href="#">Пользовательское соглашение</a>
      </div>
    </footer>
  );
};

export default Footer;
