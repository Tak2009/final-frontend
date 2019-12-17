import React, { Component } from 'react';
import SiteList from '../components/sites/SiteList';
import SiteInput from '../components/sites/SiteInput';
import SiteDetails from '../components/sites/SiteDetails';
import { SiteDetailsHeader } from '../components/sites/SiteDetailsHeader';
import { fetchSites, createSite,  destroySite } from "../actions/SiteActions"; // no more deleteSite 
import { connect } from "react-redux";
import { Route } from 'react-router-dom';

class SitesContainer extends Component {

    componentDidMount() {
        this.props.fetchSites()
    }

    render() {
        console.log(this.props.match)
        console.log(this.props)

        return (
        <div>
            <SiteInput createSite={this.props.createSite}/>
            <SiteList destroySite={this.props.destroySite} sites={this.props.sites}/>
            <Route exact path={this.props.match.url} render={routerProps => <SiteDetailsHeader {...routerProps} sites={this.props.sites} />}/> {/* <Route exact path={this.props.match.url} render={() => <h3>Click a site from the list above for more details</h3>}/> */}
            <Route path={`${this.props.match.url}/:siteId`} render={routerProps =><SiteDetails {...routerProps} sites={this.props.sites} />} />
        </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         sites: state.sites
//     }
// }

const mapStateToProps = state => {
    const rearrangedStateSites = state.sites.map(site => ({
        id: site.id,
        id_number: site.id_number,
        site: site.site,
        states: site.states,
        short_description: site.short_description,
        http_url: site.http_url 
        })
    )
    return {
        sites: rearrangedStateSites
    }
}


export default connect(mapStateToProps, { fetchSites, createSite, destroySite } )(SitesContainer) // no more deleteSite
