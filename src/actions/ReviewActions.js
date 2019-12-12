export const ADD_REVIEW = "ADD_REVIEW";
export const SET_REVIEWS = "SET_REVIEWS";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const FETCH_REVIEWS = "FETCH_REVIEWS";

export const setReviews = reviews => {
    return { type: SET_REVIEWS, reviews };
  };


export const addReview = review => {
    return { type: ADD_REVIEW, review}
};

export const deleteReview = id => {
    return { type: DELETE_REVIEW, id}
};


export const fetchReviews = () => {
    return (dispatch) => {
        fetch("http://localhost:4000/reviews")
        .then(resp => resp.json())
        .then(reviews => {
            console.log(reviews)
            dispatch(setReviews(reviews));
        });
    };
}

export const destroyReview = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/reviews/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            dispatch(deleteReview(id));
        });
    };
}