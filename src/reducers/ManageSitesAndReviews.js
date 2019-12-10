// import cuid from 'cuid';
// import { combineReducers } from "redux";
// export const cuidFn = cuid;
// // import {
// //     ADD_SITES,
// //     DELETE_SITES
// //   } from "../actions/Sites";

// const ManageSitesAndReviews = combineReducers({
//     sites: manageSites,
//     reviews: manageReviews
// });

// export default ManageSitesAndReviews;

// function manageSites(state = [], action) {
//     console.log(action)
//     // switch(action.type) {
//     //     case ADD_SITES:
//     //         const restaurant = {
//     //             id: cuid(),
//     //             text: action.text
//     //         }
//     //         console.log(site)
//     //         return [...state, site]
//     //         // return { sites: state.sites.concat(site) }
//     //     case DELETE_SITES:
//     //         console.log(action)
//     //         // return state.filter(site => site.id !== action.id)

//     //     default:
//     //         return state
//     // }
// };

// function manageReviews(state = [], action) {
//     console.log(action)
//     // switch(action.type) {
//     //     case "ADD_REVIEW":
//     //         const review = {
//     //             id: cuid(),
//     //             text: action.review.text,
//     //             restaurantId: action.review.restaurantId
//     //         }
//     //         return [...state, review]
//     //     case "DELETE_REVIEW":
//     //         return state.filter(review => review.id !== action.id)
//     //     default:
//     //         return state
//     // }
// };