import React from 'react';
// import { SHOP_DATA } from './shop.data';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		collections: SHOP_DATA
	// 	};
	// }

	// const { collections } = this.state;
	return (
		<div>
			<Route exact path={`${match.path}`} component={CollectionsOverview} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		</div>
	);
};

export default ShopPage;
