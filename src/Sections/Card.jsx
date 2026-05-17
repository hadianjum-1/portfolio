import React from 'react';
import './testi.css';

const Card = ({ d, n, r, im, alt }) => {
  return (
    <article className="c1" role="article">
      <p className="card-quote">
        {d}
        <br />
        <span aria-label="Five stars rating" role="img">⭐⭐⭐⭐⭐</span>
      </p>

      <div>
        <hr className="line" />
        <div className="info">
          <img
            src={im}
            alt={alt || `Profile photo of ${n}`}
            width="40"
            height="40"
            loading="lazy"
          />
          <div className="name">
            <h3>{n}</h3>
            <p>{r}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
