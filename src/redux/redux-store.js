import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import userReducer from './userReducer';
import sidebarReducer from "./sidebarReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    auth: authReducer,
    sidebar: sidebarReducer,
});


 let store = legacy_createStore(reducers,applyMiddleware(thunkMiddleware));



export default store;