import newsReduser from "./news-reducer";
import { combineReducers,createStore } from "redux";

let redusers=combineReducers({
    newsPage:newsReduser 
});
let store=createStore(redusers);

export default store;