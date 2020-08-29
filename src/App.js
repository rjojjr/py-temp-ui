import React, {useCallback, useEffect, useMemo, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';

import {networkErrorMsg, loadingMsg, doneLoadingMsg} from "./constants";
import {getAllStatuses} from "./services/summary-service";
import HomeLoader from "./components/loaders/home-loader";

import RootContext from "./components/context/root-context";
import MainRouter from "./components/router/main-router";

const initialState = {
    isLoading: false,
    statuses: [],
    msg: {}
};

const basicReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_STATUS':
            if(state.statuses.length == 0){
                return {...state, statuses: [{id: action.id, lastUpdate: action.lastUpdate,  now: action.now, day: action.day, week: action.week}]};
            }else{
                let found = false;
                let statuses = state.statuses.map(status => {
                    if (status.id === action.id) {
                        return {id: action.id, lastUpdate: action.lastUpdate, now: action.now, day: action.day, week: action.week};
                        found = true;
                    } else {
                        return status;
                    }
                });
                if(!found){
                    statuses.push({id: action.id, lastUpdate: action.lastUpdate, now: action.now, day: action.day, week: action.week})
                }
                return {...state, statuses: statuses};
            }

        case 'UPDATE_MSG':
            return {...state, msg: {msg: action.msg, type: action.msgType}};
        case 'EMPTY_MSG':
            return {...state, msg: {}};
        case 'DONE_LOADING':
            return {...state, isLoading: false};
        case 'LOADING':
            return {...state, isLoading: true};
        default:
            return state;
    }
};




function App() {

    const [state, dispatch] = useReducer(
        basicReducer,
        initialState
    );

    const handleStatusChange = status => {

        console.log('status', status);
        dispatch({type: 'UPDATE_STATUS', id: status.id, lastUpdate: status.lastUpdate, now: status.now, day: status.day, week: status.week});
    };

    const handleMsgChange = msg => {

        if (Object.keys(msg).length === 0) {
            dispatch({type: 'EMPTY_MSG'});
        } else if (msg === doneLoadingMsg) {
            dispatch({type: 'DONE_LOADING'});
        } else if (msg === loadingMsg) {
            dispatch({type: 'LOADING'});
        } else {
            dispatch({type: 'UPDATE_MSG', msg: msg.msg, msgType: msg.type});
        }
    };

    const contextValue = useMemo(() => {
        return {...state, handleStatusChange, handleMsgChange};
    }, [state, handleStatusChange, handleMsgChange]);

    return (

            <div className="App">
                <RootContext.Provider value={contextValue}>
                    <MainRouter />

                </RootContext.Provider>
            </div>
    );
}

export default App;
