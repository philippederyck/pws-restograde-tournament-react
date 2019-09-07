import React from 'react';
import DataService from '../../data.service';
import { Link } from 'react-router-dom';

const RestaurantsList = () => {
	let restaurants = DataService.getRestaurants();

	return (
		<div className="row mt-5">
			{restaurants.map(r => (
				<div key={r.id} className="col-lg-4 col-md-12 card-group">
					<div className="card card-cascade mt-2 mb-2">
						<div className="view view-cascade overlay">
							<img
								className="card-img-top"
								alt={r.name}
								src={`https://raw.githubusercontent.com/philippederyck/pws-tournament-restograde-react/master/src/assets/${r.image}`}
							/>
							<Link to={`/restaurants/${r.id}/reviews`}>
								<div className="mask rgba-white-slight"></div>
							</Link>
						</div>

						<div className="card-body card-body-cascade text-center">
							<h5 className="card-title">{r.name}</h5>
							<h6 className="text-gray">{r.city}</h6>
							<p className="card-text">{r.description}</p>

							<Link to={`/restaurants/${r.id}/reviews`}>
								<button className="btn btn-primary">Reviews</button>
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default RestaurantsList;
