import React from "react";
import './Site.css'

const siteDetails = (props) => {
    console.log(props)
      return (
      <div ref={props.ref}>
        <h4>Site Details</h4>
        <table>
          <tbody>
            <tr>
              <td className="first-td">
              </td>
              <td>
                Site Name:
              </td>
              <td>
                {props.site.site}
              </td>
            </tr>
            <tr>
              <td className="first-td">
              </td>
              <td>
                Short Description: 
              </td>
              <td>
                {props.site.short_description}
              </td>
            </tr>
            <tr>
              <td className="first-td">
              </td>
              <td>
              Official UNESCO website: 
              </td>
              <td>
              <a href={props.site.http_url} key={props.site.id_number} rel="noopener noreferrer" target="_blank"> {props.site.http_url}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      );
  }

  export default siteDetails