import React from "react";
// https://www.npmjs.com/package/react-router-hash-link
import { HashLink } from 'react-router-hash-link';
import './SiteList.css'


class SiteList extends React.Component {
  
   renderSites = () => {
    console.log(this.props)
    return this.props.sites.map(site => (
      <table>
        <tr>
          <td className="first-td">
            <button onClick={() => this.props.destroySite(site.id)} className="btn--small"> Delete </button>
          </td>
          <td>
            <p key={site.id}><HashLink key={site.id} to={`/sites/${site.id}/#detail`}>{site.site} ({site.states})</HashLink></p>
          </td>
        </tr>
      </table>
      ));
    };

  render(){
    console.log(this.props.sites)
    // console.log(Object.keys(this.props.sites))
    return (
      <div class="container-fluid">
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

