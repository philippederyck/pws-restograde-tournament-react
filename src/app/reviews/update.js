import React from 'react';
import ReviewForm from './form';
import DataService from '../../data.service';

const UpdateReview = props => {
	let { history, match } = props;
	let { id } = match.params;

	let review = DataService.getReviewById(id);
	let restaurants = DataService.getRestaurants();

	let handleSubmit = data => {
		let review = DataService.updateReview(data);
		history.push(`/restaurants/${review.restaurant_id}/reviews`);
	};

	return <ReviewForm review={review} restaurants={restaurants} onSubmit={handleSubmit} />;
};

export default UpdateReview;
