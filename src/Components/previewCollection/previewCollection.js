import React from "react";
import "./previewCollection.css";
import CollectionItems from "../Collection-Items/collectionItems";
const previewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItems key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default previewCollection;
