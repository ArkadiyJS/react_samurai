import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import userReducer from './userReducer';
import sidebarReducer from "./sidebarReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    sidebar: sidebarReducer,
});


 let store = legacy_createStore(reducers,applyMiddleware(thunkMiddleware));
 


export default store;