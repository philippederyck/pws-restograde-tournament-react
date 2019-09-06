import React from 'react';
import DataService from '../../data.service';
import { Link } from 'react-router-dom';

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
				<div key={r.id} className="card w-75 mt-4 mb-2">
					<div className="card-body">
						<h4 className="card-title">
							<span className="font-weight-bold">{r.rating}/10</span>
							<span className="font-weight-light ml-3">{r.title}</span>
							<span className="float-right">
								<Link className="p-2 small btn btn-primary align-self-end" to={`/reviews/${r.id}/edit`}>
									Edit
								</Link>
							</span>
						</h4>
						<p className="card-text pt-2">{r.content}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default RestaurantReviews;
