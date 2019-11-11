import React, { useEffect, useRef } from 'react';
import DataService from '../../data.service';
import { Link } from 'react-router-dom';

const RestaurantSingleReview = props => {

    let r = props.review;

	const reviewContent = useRef();
	useEffect(() => {
		if(reviewContent.current) {
			reviewContent.current.innerHTML = r.content;
		}
	})

	return (
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
                <p className="card-text pt-2" ref={reviewContent} />
            </div>
        </div>
	);
};

export default RestaurantSingleReview;
