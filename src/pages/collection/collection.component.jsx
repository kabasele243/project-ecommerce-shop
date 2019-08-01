import React from "react";
import { connect } from "react-redux";
import Collection from "../../components/collection-item/collection-item.components";
import {
  slectCollection,
  selectCollection
} from "../../redux/shop/shop.selector";
import "./collection.styles.scss";

const CollectionPage = () => (
  <div className="collection-page">
    <h2>COLLECTION PAGE</h2>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
