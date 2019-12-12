import React from "react";



class ReviewList extends React.Component {
  
  renderReviews = () => {
      // debugger
      console.log(this.props)
      console.log(Object.keys(this.props.site))
      console.log(Object.keys(this.props.site.reviews))
      
      const siteReviews = this.props.reviews.filter(review => review.latinamerica_id === this.props.site.id);
      
      return siteReviews.map(review => (
        <li key={review.id}><p>{review.comment}</p>
        <p>Rating: ({review.rating})</p>
        <button onClick={() => this.props.destroyReview(review.id)}> Delete </button>
        </li>
        ));

      // return this.props.site.reviews.map(review => (
      //   <li key={review.id}><p>{review.comment}</p>
      //   <p>Rating: ({review.rating})</p>
      //   <button onClick={() => this.props.destroyReview(review.id)}> Delete </button>
      //   </li>
      //   ));
  };

  render(){
    return (
      <div>
        <h4>Reviews: </h4>
        <ol>
        {this.renderReviews()}
        </ol>
      </div>
     );
  }
};


export default ReviewList


