import React from "react"
import { connect } from "react-redux"
import { fetchReviews, createReview, destroyReview } from "../actions/ReviewActions";
import ReviewList from "../components/reviews/ReviewList";
import ReviewInput from "../components/reviews/ReviewInput";

class ReviewsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchReviews()
    }



    render () {
        console.log(this.props.site)
        return(
            <div>
                <ReviewInput createReview={this.props.createReview} site={this.props.site}/>
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

export default connect(mapStateToProps, { fetchReviews, createReview, destroyReview })(ReviewsContainer)