import React from "react";
import { Link } from 'react-router-dom';


class SiteList extends React.Component {
  
  
  renderSites = () => {
    console.log(this.props)
    // console.log(Object.keys(this.props.sites))

    return this.props.sites.map(site => (
      <li key={site.id}><Link key={site.id} to={`/sites/${site.id}`}>{site.site} ({site.states})</Link>
      <button onClick={() => this.props.destroySite(site.id)}> Delete </button>
      </li>
      ));
    };

  //   return Object.keys(this.props.sites).map(siteID => (
  //   <li key={siteID}><Link key={siteID} to={`/sites/${siteID}`}>{this.props.sites[siteID].site} ({this.props.sites[siteID].states})</Link>
  //   <button onClick={() => this.props.destroySite(siteID)}> Delete </button>
  //   </li>
  //   ));
  //  }

  render(){
    console.log(this.props.sites)
    // console.log(Object.keys(this.props.sites))
    return (
      <div>
        <ul>
        {this.renderSites()}
        </ul>
      </div>
     );
  }
};


export default SiteList


// import React from "react";
// import { Link } from 'react-router-dom';


// const SiteList = ({sites}, {deleteSite}) => {

//     console.log(sites)
//     console.log(deleteSite)
//     console.log(Object.keys(sites))
    
//     const renderSites = Object.keys(sites).map(siteID => (
//         <li key={siteID}><Link key={siteID} to={`/sites/${siteID}`}>{sites[siteID].site} ({sites[siteID].states})</Link>
//         <button onClick={() => deleteSite(siteID)}> Delete </button>
//         </li>
         
//  ));
     
//     return (
//         <div>
//           <ul>
//           {renderSites}
//           </ul>
//         </div>
//     );
// };


// export default SiteList

