import React from 'react';
import Home from './home';
import Footer from './footer';
import Navigation from './navigation';

import CreateReview from './reviews/create';
import UpdateReview from './reviews/update';
import RestaurantIndex from './restaurants/index';
import RestaurantReviews from './restaurants/reviews';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { MDBContainer } from 'mdbreact';

const Application = () => {
	return (
		<Router>
			<Navigation />
			<MDBContainer fluid>
				<Switch>
					<Route path="/reviews/new" exact component={CreateReview} />
					<Route path="/reviews/:id/edit" exact component={UpdateReview} />
					<Route path="/restaurants" exact component={RestaurantIndex} />
					<Route path="/restaurants/:id/reviews" exact component={RestaurantReviews} />
					<Route path="/" exact component={Home} />
					<Redirect to="/" />
				</Switch>
			</MDBContainer>
			<Footer />
		</Router>
	);
};

export default Application;
