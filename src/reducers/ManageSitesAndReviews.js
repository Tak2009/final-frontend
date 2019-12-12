
import { combineReducers } from "redux";

import {
    ADD_SITE,
    SET_SITES,
    DELETE_SITE
  } from "../actions/SiteActions";
// import cuid from 'cuid';　// can not use this for ID as ID must be integer
// export const cuidFn = cuid;


const manageSitesAndReviews = combineReducers({
    sites: manageSites
    // reviews: manageReviews
});

export default manageSitesAndReviews;

function manageSites(state = [], action) {
    console.log(action)
    switch(action.type) {
        case ADD_SITE:
            
            
            const site = {
                id_number: action.site.id_number,
                site: action.site.site,
                states: action.site.states,
                short_description: action.site.short_description,
                http_url: action.site.http_url
            }
            console.log(site)
            return [...state, site]
            // return { sites: state.sites.concat(site) }
        case SET_SITES:
                    return action.sites;
        case DELETE_SITE:
            // debugger
            console.log(action)
            return state.filter(site=> site.id !== action.id)

        default:
            return state
    }
};

// function manageReviews(state = [], action) {
//     console.log(action)
    // switch(action.type) {
    //     case "ADD_REVIEW":
    //         const review = {
    //             id: cuid(),
    //             text: action.review.text,
    //             restaurantId: action.review.restaurantId
    //         }
    //         return [...state, review]
    //     case "DELETE_REVIEW":
    //         return state.filter(review => review.id !== action.id)
    //     default:
    //         return state
    // }
// };