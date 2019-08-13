import {combineReducers} from "redux";
import reducerData from "./reducerData"
const  rootReducer = combineReducers({
    fetchData: reducerData
})
export default rootReducer