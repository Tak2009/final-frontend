import React, { Component } from 'react';
import './SiteInput.css';

class SiteInput extends Component {

state = {
  site: "",
  states: "",
  short_description: "",
  http_url: ""
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
  this.props.addSite(this.state)
  this.setState({
    site: "",
    states: "",
    short_description: "",
    http_url: ""
  })
}

  render() {
    console.log(this.props)
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


export default SiteInput