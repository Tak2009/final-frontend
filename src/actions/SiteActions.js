export const SET_SITES = "SET_SITES";
export const ADD_SITE = "ADD_SITE";
export const FETCH_SITES = "FETCH_SITES";
export const DELETE_SITE = "DELETE_SITE";


export const setSites = sites => {
    return { type: SET_SITES, sites };
  };

export const addSite = site => {
    return { type: ADD_SITE, site}
}

export const deleteSite = id => {
    return { type: DELETE_SITE, id}
}

export const fetchSites = () => {
    return (dispatch) => {
        fetch("http://localhost:4000/latinamericas")
        .then(resp => resp.json())
        .then(sites=> {
            console.log(sites)
            dispatch(setSites(sites))
        })
    }
}

