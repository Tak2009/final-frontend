import React, { Component } from 'react';
import './SiteInput.css';

class SiteInput extends Component {

state = {
  site: "",
  states: ""
}
  

handleOnChange = (event) => {
  console.log(this.state)
  const {name, value } = event.target;
  this.setState({
    [name]: value
  })
}

handleOnSubmit = (event) => {
  event.preventDefault()
  this.props.addSite(this.state)
  this.setState({
    site: "",
    states: ""
  })
}

  render() {
    console.log(this.props)
    return (
      <div>
          <br/>
          <br/>
            <form onSubmit={this.handleOnSubmit} className="form_style"> 
                <label>Site Name: <input name="site" onChange={this.handleOnChange} type="text" className="input" value={this.state.site}/></label>
                <br/>
                <label>Country: <input name="states" onChange={this.handleOnChange} type="text" className="input" value={this.state.states}/></label>
                <br/>
                <input type="submit"/>
            </form>
      </div>
    );
  }
};


export default SiteInput