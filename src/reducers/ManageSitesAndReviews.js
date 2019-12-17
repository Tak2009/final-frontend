
import { combineReducers } from "redux";
// import cuid from 'cuid';　// can not use this for ID as ID must be integer
// export const cuidFn = cuid;

import {
    ADD_SITE,
    SET_SITES,
    DELETE_SITE,
  } from "../actions/SiteActions";

  import {
    ADD_REVIEW,
    SET_REVIEWS,
    DELETE_REVIEW
  } from "../actions/ReviewActions";


const manageSites = (state = [], action) => {
    // console.log(action)
    switch(action.type) {
        case ADD_SITE:
            const site = {
                id: action.site.id,
                id_number: action.site.id_number,
                site: action.site.site,
                states: action.site.states,
                short_description: action.site.short_description,
                http_url: action.site.http_url
            }
            // console.log(site)
            return [...state, site]
            // return state.concat(site)
            // return { sites: state.sites.concat(site) }
            
        case SET_SITES:
            console.log(action.sites)
            return action.sites;

            // console.log(action.sites.length)
            // return action.sites.length === 0 ? action.sites : action.sites.map(site => ({
            //     id: site.id, 
            //     id_number: site.id_numbe, 
            //     site:site.site, 
            //     http_url: site.http_url,
            //     short_description: site.short_description,
            //     states: site.states,
            //     reviews: site.reviews
            // }))
        
        case DELETE_SITE:
            // debugger
            // console.log(action)
            return state.filter(site=> site.id !== action.id)

        default:
            return state
    }
};

const manageReviews = (state = [], action) => {
    // console.log(action)
    // debugger
    switch(action.type) {
        case SET_REVIEWS:
                    return action.reviews;
        case ADD_REVIEW:
            const review = {
                id: action.review.id,
                latinamerica_id: action.review.latinamerica_id,
                comment: action.review.comment,
                rating: action.review.rating
            }
            return [...state, review]
        case DELETE_REVIEW:
            return state.filter(review => review.id !== action.id)
        default:
            return state
    }
};


const manageSitesAndReviews = combineReducers({
    sites: manageSites,
    reviews: manageReviews
});


export default manageSitesAndReviews;