import React from 'react';
import { Link } from 'react-router-dom';

import sprite from '../../../img/sprite.svg';
import { spriteNames } from '../../const';

function Breadcrumbs() {
  return (
    <section className="container breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to="#123">
            Main Page
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <svg>
            <use xlinkHref={`${sprite}#${spriteNames.breadCrumbsArrow}`} />
          </svg>
        </li>
        <li className="breadcrumbs__item">
          <span>Новости и анонсы</span>
        </li>
        <li className="breadcrumbs__item breadcrumbs__item--line">
          <div className="breadcrumbs__line" />
        </li>
      </ul>
    </section>
  );
}

export default Breadcrumbs;
