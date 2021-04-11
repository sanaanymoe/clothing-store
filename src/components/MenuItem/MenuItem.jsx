import React from "react";

import './MenuItem.styles.scss'

const MenuItem = ({ title, imageurl, size }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageurl})` }}
      className={`${size} menu-item`}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;