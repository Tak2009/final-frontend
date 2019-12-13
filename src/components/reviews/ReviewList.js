import React from "react";



class ReviewList extends React.Component {

    calcRating = () => {
      const siteReviews = this.props.reviews.filter(review => review.latinamerica_id === this.props.site.id);
      const reviewRatingArray = siteReviews.map(review => review.rating)
      const totalReviewRating = reviewRatingArray.length === 0 ?  null : reviewRatingArray.reduce((prev, curr) => (prev + curr))
      const averageRating = reviewRatingArray.length === 0 ? null : (totalReviewRating/reviewRatingArray.length).toFixed(1)
    
      console.log(reviewRatingArray)
      console.log(siteReviews)
      console.log(totalReviewRating)
      console.log(averageRating)


      return averageRating
      
    };

    renderReviews = () => {
      
      const siteReviews = this.props.reviews.filter(review => review.latinamerica_id === this.props.site.id);

        return siteReviews.map(review => (
          <li key={review.id}><p>{review.comment}</p>
          <p>Rating: ({review.rating})</p>
          <button onClick={() => this.props.destroyReview(review.id)}> Delete </button>
          </li>
          ));
    };

    render(){
      return (
         <div>
            <h4>Reviews: (Total Rating: {this.calcRating()}/5)</h4>
            <ol>
            {this.renderReviews()}
            </ol>
         </div>
      );
    }
};

//   render(){
//     return (
//       <div>
//         { this.props.reviews ?
//         <div>
//           <h4>Reviews: </h4>
//           <ol>
//           {this.renderReviews()}
//           </ol>
//         </div>
//         : null }
//       </div>
//      );
//   }
// };


export default ReviewList


