import React, { Component } from "react";

class ReviewInput extends Component {

    state = {
        comment: "",
        rating: 1,
        latinamerica_id: this.props.site.id
    }
    
    handleOnChange = (event) => {
        console.log(this.state)
        const {name, value} = event.target;
        console.log({name, value})
        this.setState({
            [name]: value,
            latinamerica_id: this.props.site.id
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.createReview(this.state)
        this.setState({
            comment: "",
            rating: 1,
            
        })
      }

    renderOptions = () => {
        const options = [{rating:1}, {rating:2}, {rating:3}, {rating:4}, {rating:5}];
        return options.map(option => (<option key={option.rating} value={option.rating}>{option.rating}</option>));
    }

    render () { 
        console.log(this.props)
      return( 
            <div>
          <br/>
           <h3>New Review Input Form</h3>
            <form onSubmit={this.handleOnSubmit} className="form_style"> 
                <label>Comment: <textarea name="comment" onChange={this.handleOnChange} type="text" className="textarea" value={this.state.comment}/></label>
                <br/>
                <label>Rating: <select name ="rating" onChange={this.handleOnChange} value={this.state.rating}>{this.renderOptions()}</select></label>
                <br/>
                <input type="submit" value="Add"/>
            </form>
      </div>
 
        )
    }
}

export default ReviewInput