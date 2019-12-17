///////////////////////////////////// Class. Site.js needed. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
import React from "react";
import ReviewsContainer from "../../containers/ReviewsContainer";
import Site from "./Site"

class SiteDetails extends React.Component {
    
    
    selectSite = () => {
      console.log(this.props)
      return (this.props.sites.filter(site => site.id === Number(this.props.match.params.siteId))[0])
    } //site.id = number but params.siteId = string
  

    render() {
      console.log(this.selectSite())
      return (
          <div>
            { this.selectSite() ?
            <div>
            <Site site={this.selectSite()}/>
            <ReviewsContainer site={this.selectSite()}/>
            </div>
            :  <h3>Click a site from the list above for more details</h3> }
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


