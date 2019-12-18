import React from "react";

 const SiteDetailsHeader = (props) => {
    console.log(props)
    const checkData = props.sites.length === 0;
    console.log(checkData)
    return (checkData ? <h3>No Site Available</h3> : <h3>Click a site from the list above for more details</h3>)
}

export { SiteDetailsHeader }
