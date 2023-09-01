import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

//Reducers
 const addInput= (state= {},action) => {
    if (action.type=== "ADD_INPUT"){
        return {...state, ...action.payload}
    } 
 
    
    
    else if (action.type === "CLEAR_FORM"){
        return state= {};
    }
    return state;
    
 }


//Creating Store

const store= createStore(
    combineReducers({
        input:addInput,

    }),
    applyMiddleware(logger)
)


ReactDOM.render( <Provider store={store}><App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
