import React from 'react';
import { Link } from 'react-router-dom';

import sprite from '../../../img/sprite.svg';
import { spriteNames } from '../../const';
import { data } from '../../data';

function News() {
  return (
    <section className="news container">
      <div className="news__title-wrapper">
        <Link className="news__back-link" to="/123/" type="button">
          <svg width={10} height={16}>
            <use xlinkHref={`${sprite}#${spriteNames.breadCrumbsArrow}`} />
          </svg>
        </Link>
        <h2 className="news__title">Новости и анонсы</h2>
      </div>
      <div className="news__line-mob" />

      <div className="news__wrapper">
        {data.map((item) => (
          <Link className="news__item" to="/" key={item.id}>
            {/* <img
              className="news__item-img"
              src={item.previewImage}
              alt="news-preview"
            /> */}
            <picture>
              <source media="(min-width: 1920px)" srcSet={item.previewImage} />
              <img
                className="news__item-img"
                src={item.previewImageMob}
                alt="news-preview"
              />
            </picture>
            <p className="news__item-title">{item.title}</p>
            <p className="news__item-desc">{item.description}</p>
            <span className="news__item-author">{item.author}</span>
            <span className="news__item-date">{item.createDate}</span>
          </Link>
        ))}
      </div>

      <div className="news__pagination">
        <ul className="news__pagination-list">
          <li className="news__pagination-item">
            <Link
              className="news__pagination-link news__pagination-link--active"
              to="#123"
            >
              1
            </Link>
          </li>
          <li className="news__pagination-item">
            <Link className="news__pagination-link" to="#123">
              2
            </Link>
          </li>
          <li className="news__pagination-item">
            <Link className="news__pagination-link" to="#123">
              3
            </Link>
          </li>
          <li className="news__pagination-item">
            <Link className="news__pagination-link" to="#123">
              4
            </Link>
          </li>
          <li className="news__pagination-item">
            <span className="news__pagination-link">...</span>
          </li>
          <li className="news__pagination-item">
            <Link className="news__pagination-link" to="#123">
              10
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default News;
