import React, { Component } from 'react';
import SiteList from '../components/sites/SiteList';
import SiteInput from '../components/sites/SiteInput';
import SiteDetails from '../components/sites/SiteDetails';
import { fetchSites, addSite, deleteSite } from "../actions/SiteActions";
import { connect } from "react-redux";
import { Route } from 'react-router-dom';

class SitesContainer extends Component {

    componentDidMount() {
        this.props.fetchSites()
    }


    render() {
        console.log(this.props.match.url)
        console.log(this.props)
        
        return (
        <div>
            <SiteInput addSite={this.props.addSite}/>
            <SiteList deleteSite={this.props.deleteSite} sites={this.props.sites}/>
            <Route exact path={this.props.match.url} render={() => <h3>Click a site from the list above for more details</h3>}/>
            <Route path={`${this.props.match.url}/:siteId`} render={routerProps =><SiteDetails {...routerProps} sites={this.props.sites} />} />
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      sites: state.sites
    }
  }


export default connect(mapStateToProps, { fetchSites, addSite, deleteSite} )(SitesContainer)
