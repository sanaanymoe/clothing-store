import React from "react";

import "./CollectionPreview.styles.scss";

import CollectionItem from '../CollectionItem/CollectionItem'

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.slice(0, 4).map(({ id, ...restProps }) => (
          <CollectionItem key={id} {...restProps}/>
        ))}
      </div>
    </div>
  );
};


export default CollectionPreview;