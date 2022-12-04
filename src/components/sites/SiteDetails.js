///////////////////////////////////// Class. Site.js needed. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
import React from "react";
import ReviewsContainer from "../../containers/ReviewsContainer";
import Site from "./Site"
// import { Route } from 'react-router-dom';

class SiteDetails extends React.Component {
    
    selectSite = () => {
      console.log(this.props)
      return (this.props.sites.filter(site => site.id === Number(this.props.match.params.siteId))[0])
    } //site.id = number but params.siteId = string
  
    messageSwitch = () => {
      return (this.props.sites.length === 0 ? <h3>No Site Available</h3> : <h3>Click a site from the list above for more details</h3>)
    }

    render() {
      console.log(this.selectSite())
      return (
          <div>
            { this.selectSite() ?
            <div>
              <Site site={this.selectSite()}/> 
              {/* <Route exact path={this.props.match.url} render={routerProps =><Site {...routerProps} site={this.selectSite()}/>}/> */}
              <ReviewsContainer site={this.selectSite()}/>
            </div>
            :  this.messageSwitch() }
          </div>
        );
    }
}

export default SiteDetails


///////////////////////////////////// Function. No Site.js needed. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// import React from "react";
// import ReviewsContainer from "../../containers/ReviewsContainer";

// const SiteDetails= ({match, sites}) => {
//   // debugger
//   const selectSite = sites.filter(site => site.id === Number(match.params.siteId))[0] //site.id = number but params.siteId = string
//   console.log(selectSite)

//   return (
//     <div>
//       { selectSite ?
//       <div>
//       <h3>Site Detrails</h3>
//       <h4>Site Name: {selectSite.site}</h4>
//       <h4>Short Description:</h4><p>{selectSite.short_description}</p>
//       <h4>Official UNESCO website: </h4><a href={selectSite.http_url} key={selectSite.id_number} rel="noopener noreferrer" target="_blank"> {selectSite.http_url}</a>
//       <ReviewsContainer site={selectSite}/>
//       </div>
//       : null }
//     </div>
//   );
// }
// export default SiteDetails


