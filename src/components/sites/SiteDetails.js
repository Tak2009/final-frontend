import React from "react";
import ReviewsContainer from "../../containers/ReviewsContainer";


const SiteDetails= ({match, sites}) => {
    // debugger
    const selectSite = sites.filter(site => site.id == match.params.siteId)[0]
    

    return (
      <div>
        <h3>Site Detrails</h3>
        <h4>Site Name: {selectSite.site}</h4>
        <h4>Short Description:</h4><p>{selectSite.short_description}</p>
        <h4>Official UNESCO website: </h4><a href={selectSite.http_url} key={selectSite.id_number} rel="noopener noreferrer" target="_blank"> {selectSite.http_url}</a>
        <ReviewsContainer site={selectSite}/>

        {/* <h3>Site Detrails</h3>
        <h4>Site Name: {sites[match.params.siteId].site}</h4>
        <h4>Short Description:</h4><p>{sites[match.params.siteId].short_description}</p>
        <h4>Official UNESCO website: </h4><a href={sites[match.params.siteId].http_url} key={sites[match.params.siteId].id_number} rel="noopener noreferrer" target="_blank"> {sites[match.params.siteId].http_url}</a> */}
      </div>
    );
  }

export default SiteDetails


