import React from "react";
import { Link } from 'react-router-dom';
// import Site from "./Site"


const SiteList = ({sites}) => {
  console.log(sites)
  console.log(Object.keys(sites))
  
  const renderSites = Object.keys(sites).map(siteID => 
      <li key={siteID}><Link key={siteID} to={`/sites/${siteID}`}>{sites[siteID].site} ({sites[siteID].states})</Link></li>
      );
     
      return (
        <div>
          <ul>
          {renderSites}
          </ul>
        </div>
      );
};


export default SiteList


// class SiteList extends React.Component {
  
  
//     renderSites = () => this.props.sites.map(site => <Site deleteSite={this.props.deleteSite} site={site} />)
    

//     render() {
//         console.log(this.props.sites)
//         console.log(Object.keys(this.props.sites))
//           return (
//               <div>
//                 <ul>
//                 {this.renderSites()}
//                 </ul>
//               </div>
//           );
//     };
// }



// export default SiteList


