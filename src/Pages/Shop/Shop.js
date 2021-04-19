import React, { Component } from "react";
import ShopData from "./ShopData";
import CollectionPreview from "../../Components/previewCollection/previewCollection.js";
class ShopPage extends Component {
  state = { collections: ShopData };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
