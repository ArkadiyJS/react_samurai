import { combineReducers, legacy_createStore } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import userReducer from './userReducer';
import sidebarReducer from "./sidebarReducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    auth: authReducer,
    sidebar: sidebarReducer,
});


 let store = legacy_createStore(reducers);



export default store;