import React from "react";
import { Link } from 'react-router-dom';


class SiteList extends React.Component {
  
  
  renderSites = () => {

    return Object.keys(this.props.sites).map(siteID => (
    <li key={siteID}><Link key={siteID} to={`/sites/${siteID}`}>{this.props.sites[siteID].site} ({this.props.sites[siteID].states})</Link>
    <button onClick={() => this.props.deleteSite(this.props.sites[siteID].id_number)}> Delete </button>
    </li>
    ));
   }

  render(){
    console.log(this.props.sites)
    console.log(this.props.deleteSite)
    console.log(Object.keys(this.props.sites))
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

