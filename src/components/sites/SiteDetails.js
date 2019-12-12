import React from "react";


const SiteDetails= ({match, sites}) => {
    // debugger
    
    return (
      <div>
        {/* <h3>Site Detrails</h3>
        <h4>Site Name: {sites[match.params.siteId].site}</h4>
        <h4>Short Description:</h4><p>{sites[match.params.siteId].short_description}</p>
        <h4>Official UNESCO website: </h4><a href={sites[match.params.siteId].http_url} key={sites[match.params.siteId].id_number} rel="noopener noreferrer" target="_blank"> {sites[match.params.siteId].http_url}</a> */}
        
        <h3>Site Detrails</h3>
        <h4>Site Name: {sites.filter(site => site.id == match.params.siteId)[0].site}</h4>
        {/* <h4>Short Description:</h4><p>{sites[match.params.siteId].short_description}</p>
        <h4>Official UNESCO website: </h4><a href={sites[match.params.siteId].http_url} key={sites[match.params.siteId].id_number} rel="noopener noreferrer" target="_blank"> {sites[match.params.siteId].http_url}</a> */}

      </div>
    );
  }

export default SiteDetails


// const SiteDetails= ({match, sites}) => {
    
//   return (
//     <div>
//       <h3>{ sites[match.params.siteId].site }</h3>
//     </div>
//   );
// }

// export default SiteDetails

