import React, {useCallback, useContext, useEffect, useState} from "react";
import LoadingView from "../global/LoadingView";

import Home from "../pages/home";

import RootContext from "../context/root-context";
import {getAllStatuses} from "../../services/summary-service";

const HomeLoader = () => {

    const context = useContext(RootContext)
    const { isLoading, msg, handleMsgChange, handleStatusChange } = context;

    useEffect( () => {
        getAllStatuses(() => handleMsgChange, () => handleStatusChange);
    }, [getAllStatuses]);



    return(

        <div className={"admin-container"}>
            <LoadingView isLoading={isLoading} message={"Loading..."}/>
            {!isLoading && (
                <Home/>
            )}
        </div>
    );

}

export default HomeLoader