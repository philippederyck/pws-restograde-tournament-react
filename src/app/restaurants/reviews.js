import React, { useEffect, useRef } from 'react';
import DataService from '../../data.service';
import { Link } from 'react-router-dom';
import RestaurantSingleReview from './review';

const RestaurantReviews = props => {
	let { match } = props;

	let { id } = match.params;

	let restaurant = DataService.getRestaurantById(id);
	let reviews = DataService.getReviewsByRestaurantId(id);
	
	return (
		<div className="row justify-content-center mt-5">
			<div className="col-12 text-center">
				<h2>{restaurant.name}</h2>
				<h6>{restaurant.description}</h6>
			</div>
			{reviews.map(r => (
				<RestaurantSingleReview review={r} />
			))}
		</div>
	);
};

export default RestaurantReviews;
