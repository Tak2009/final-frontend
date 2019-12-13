import React, { Component } from "react";

class ReviewInput extends Component {

    state = {
        comment: "",
        rating: 1,
        latinamerica_id: this.props.site.id
    }
    
    handleTextareaOnChange = (event) => {
        console.log(this.state)
        this.setState({
            
            comment: event.target.value,
            latinamerica_id: this.props.site.id
        })
    }

    handleSelectOnChange = (event) => {
        console.log(this.state)
        this.setState({
           
            rating: event.target.value,
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

    render () { 
        console.log(this.props)
        const options = [{rating:1}, {rating:2}, {rating:3}, {rating:4}, {rating:5}];
        const renderOptions = options.map(option => (<option key={option.rating} value={option.rating}>{option.rating}</option>));

      return( 
            <div>
          <br/>
           <h3>New Site Input Form</h3>
            <form onSubmit={this.handleOnSubmit} className="form_style"> 
                <label>Commen: <textarea name="comment" onChange={this.handleTextareaOnChange} type="text" className="textarea" value={this.state.site}/></label>
                <br/>
                <label>Rating: <select name ="rating" onChange={this.handleSelectOnChange} value={this.state.rating}>{renderOptions}</select></label>
                <br/>
                <input type="submit"/>
            </form>
      </div>
 
        )
    }
}

export default ReviewInput