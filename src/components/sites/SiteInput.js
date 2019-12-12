import React, { Component } from 'react';
import './SiteInput.css';
import { connect } from "react-redux";
import { createSite } from "../../actions/SiteActions";

class SiteInput extends Component {

  generateId = () => {
    return (Math.floor(Math.random() * (1999999 - 1000000)) + 1000000)} // from 1000000 to 1999999

  state = {
  site: "",
  states: "",
  short_description: "",
  http_url: "",
  id_number: this.generateId()
  }
  

  handleOnChange = (event) => {
    console.log(this.state)
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.createSite(this.state) // this.props.addSite(this.state)
    this.setState({
      site: "",
      states: "",
      short_description: "",
      http_url: "",
      id_number: this.generateId()
    })
  }

  render() {
    // console.log(this.props)
    return (
      <div>
          <br/>
           <h3>New Site Input Form</h3>
            <form onSubmit={this.handleOnSubmit} className="form_style"> 
                <label>Site Name: <input name="site" onChange={this.handleOnChange} type="text" className="input" value={this.state.site}/></label>
                <br/>
                <label>Country: <input name="states" onChange={this.handleOnChange} type="text" className="input" value={this.state.states}/></label>
                <br/>
                <label>Short Description: <input name="short_description" onChange={this.handleOnChange} type="text" className="input" value={this.state.short_description}/></label>
                <br/>
                <label>Official UNESCO website: <input name="http_url" onChange={this.handleOnChange} type="text" className="input" value={this.state.http_url}/></label>
                <br/>
                <input type="submit"/>
            </form>
      </div>
    );
  }
};


export default connect(null, { createSite })(SiteInput);