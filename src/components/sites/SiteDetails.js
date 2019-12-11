import React from "react";


const SiteDetails= ({match, sites}) => {
    console.log(this.props)
    return (
      <div>
        <h3>{ sites[match.params.siteId].site }</h3>
      </div>
    );
  }

export default SiteDetails