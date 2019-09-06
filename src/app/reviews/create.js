import React from 'react';
import ReviewForm from './form';
import DataService from '../../data.service';

const CreateReview = props => {
	let { history } = props;

	let restaurants = DataService.getRestaurants();
	let review = { restaurant_id: restaurants[0] && restaurants[0].id };

	let handleSubmit = data => {
		let review = DataService.createReview(data);
		history.push(`/restaurants/${review.restaurant_id}/reviews`);
	};

	return <ReviewForm review={review} restaurants={restaurants} onSubmit={handleSubmit} />;
};

export default CreateReview;
