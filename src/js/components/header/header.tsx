import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import sprite from '../../../img/sprite.svg';
import { spriteNames, appRoute } from '../../const';

function Header() {
  const location = useLocation();

  return (
    <header className="header container">
      <div className="header__wrapper">
        <Link to="/">
          <h2 className="header__logo">Logo</h2>
        </Link>
        {location.pathname !== appRoute.REGISTER && (
          <div className="header__search">
            <svg>
              <use xlinkHref={`${sprite}#${spriteNames.search}`} />
            </svg>
            <input
              type="text"
              name="search"
              placeholder="Найдите ваш электромобиль"
            />
          </div>
        )}

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item header__nav-item--login">
              <Link className="header__nav-link" to={appRoute.REGISTER}>
                <svg width={30} height={30}>
                  <use xlinkHref={`${sprite}#${spriteNames.login}`} />
                </svg>
              </Link>
            </li>
            <li className="header__nav-item header__nav-item--charge">
              <Link className="header__nav-link" to="#123">
                <svg>
                  <use xlinkHref={`${sprite}#${spriteNames.charge}`} />
                </svg>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to="#123">
                <svg>
                  <use xlinkHref={`${sprite}#${spriteNames.law}`} />
                </svg>
              </Link>
            </li>
            <li className="header__nav-item">
              <button
                className="header__burger-btn"
                type="button"
                aria-label="burger-menu"
              >
                <svg>
                  <use xlinkHref={`${sprite}#${spriteNames.burger}`} />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__decor-line" />
    </header>
  );
}

export default Header;
