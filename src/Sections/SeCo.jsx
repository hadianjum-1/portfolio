import React from "react";
import "./se.css";

const SeCo = ({ t, d, w, l, p }) => {
  return (
    <article className="bi" aria-label={`Service: ${t}`}>
      <div className="co">
        <h3 className="service-title">{t}</h3>
        <p className="service-desc">{d}</p>
        <div className="service-badge">{w}</div>
        <ul aria-label={`What you get with ${t}`}>
          {l.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>

      <div className="co">
        <div className="service-badge">What You Get</div>
        <ul aria-label={`Benefits of ${t}`}>
          {p.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default SeCo;
