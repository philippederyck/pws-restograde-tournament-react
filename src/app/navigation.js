import React from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn, MDBRow, MDBNavbar } from 'mdbreact';

const Navigation = () => {
	return (
		<MDBNavbar expand={true} light={true}>
			<MDBRow className="row">
				<Link to="/restaurants">
					<MDBBtn color="primary" size="sm">
						View restaurants
					</MDBBtn>
				</Link>

				<Link to="/reviews/new">
					<MDBBtn color="primary" size="sm">
						Add review
					</MDBBtn>
				</Link>
			</MDBRow>
		</MDBNavbar>
	);
};

export default Navigation;
