import React from "react"
import { connect } from "react-redux"
import { fetchReviews, destroyReview } from "../actions/ReviewActions";
import ReviewList from "../components/reviews/ReviewList";

class ReviewsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchReviews()
    }



    render () {
        // debugger
        console.log(this.props)
        console.log(this.props.site)
        return(
            <div>
                {/* <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/> */}
                <ReviewList site={this.props.site} destroyReview={this.props.destroyReview} reviews={this.props.reviews}/>   
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
      reviews: state.reviews
    }
  }

export default connect(mapStateToProps, { fetchReviews, destroyReview })(ReviewsContainer)