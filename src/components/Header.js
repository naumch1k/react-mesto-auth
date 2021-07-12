import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoPath from './../images/header-logo.svg';

function Header() {
  const location = useLocation();

  return (
    <header className="header page__header">
      <img className="header__logo" src={logoPath} alt="Логотип сервиса Mesto Russia" />
      {true &&
        (<nav>
          {location.pathname === '/sign-in' &&
            (
              <Link className="header__navlink" to="/sign-up">
                Регистрация
              </Link>
            )
          }
          {location.pathname === '/sign-up' &&
            (
              <Link className="header__navlink" to="/sign-in">
                Войти
              </Link>
            )
          }
        </nav>)
      }
        
    </header>
  )
}

export default Header;
