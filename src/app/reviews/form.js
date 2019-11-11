import React, { useState } from 'react';
import { MDBInput, MDBBtn } from 'mdbreact';

const ReviewForm = props => {
	let { review = {}, restaurants = [], onSubmit } = props;

	let [data, setData] = useState({ ...review });

	let handleChange = event => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	let handleSubmit = event => {
		event.preventDefault();

		onSubmit(data);
	};

	return (
		<div className="row mt-5">
			<div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12 text-center">
				<form onSubmit={handleSubmit}>
					<select
						className="browser-default custom-select"
						name="restaurant_id"
						value={data.restaurant_id}
						onChange={handleChange}
					>
						{restaurants.map(r => (
							<option key={r.id} value={r.id}>
								{r.name}
							</option>
						))}
					</select>

					<MDBInput
						type="number"
						label="Your rating"
						name="rating"
						value={data.rating}
						onChange={handleChange}
					/>

					<MDBInput type="text" label="Title" name="title" value={data.title} onChange={handleChange} />

					<MDBInput
						type="textarea"
						label="How was your experience?"
						name="content"
						value={data.content}
						onChange={handleChange}
					/>

					<MDBInput
						type="url"
						label="A link to images of your experiences"
						name="imageurl"
						value={data.imageurl}
						onChange={handleChange}
					/>

					<MDBBtn type="submit" color="primary">
						Submit Review
					</MDBBtn>
				</form>
			</div>
		</div>
	);
};

export default ReviewForm;
