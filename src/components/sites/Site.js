import React from "react";

const siteDetails = (props) => {
    console.log(props)
      return (<div>
      <h3>Site Details</h3>
      <h4>Site Name: {props.site.site}</h4>
      <h4>Short Description:</h4><p>{props.site.short_description}</p>
      <h4>Official UNESCO website: </h4><a href={props.site.http_url} key={props.site.id_number} rel="noopener noreferrer" target="_blank"> {props.site.http_url}</a>
      </div>);
  }

  export default siteDetails