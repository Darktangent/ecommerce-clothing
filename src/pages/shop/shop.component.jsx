import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectIsCollectionFetching,
	selectIsCollectionsLoaded
} from '../../redux/shop/shop.selectors';
// import {
// 	firestore,
// 	convertCollectionsSnapshotToMap
// } from '../../firebase/firebase.utils.js';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	// state = {
	// 	loading: true
	// };

	// unsubscribeFromSnapshot = null;

	componentDidMount() {
		// fetch(
		// 	`https://firestore.googleapis.com/v1/projects/crwn-ecomm/databases/(default)/documents/collections`
		// )
		// 	.then(response => response.json())
		// 	.then(collections => console.log(collections));
		// const { updateCollections } = this.props;
		// const collectionRef = firestore.collection('collections');
		// collectionRef.get().then(snapshot => {
		// 	const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
		// 	updateCollections(collectionsMap);
		// 	this.setState({ loading: false });
		// });
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
	}

	render() {
		const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
		// const { loading } = this.state;
		return (
			<div className='shop-page'>
				<Route
					exact
					path={`${match.path}`}
					render={props => (
						<CollectionsOverviewWithSpinner
							isLoading={isCollectionFetching}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={props => (
						<CollectionPageWithSpinner
							isLoading={!isCollectionsLoaded}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	// updateCollections: collectionsMap =>
	// 	dispatch(updateCollections(collectionsMap))
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});
const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching,
	isCollectionsLoaded: selectIsCollectionsLoaded
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShopPage);
