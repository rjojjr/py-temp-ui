import React, {useCallback, useContext, useEffect, useState} from "react";
import LoadingView from "../global/LoadingView";

import Home from "../pages/home";

import RootContext from "../context/root-context";
import {getAllStatuses} from "../../services/summary-service";

const HomeLoader = () => {

    const state = useContext(RootContext)

    useEffect( () => {
        getAllStatuses( state.handleMsgChange,  state.handleStatusChange);
    }, [getAllStatuses]);



    return(

        <div className={"admin-container"}>
            <LoadingView isLoading={state.isLoading} message={"Loading..."}/>
            {!state.isLoading && (
                <Home/>
            )}
        </div>
    );

}

export default HomeLoader