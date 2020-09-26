import React, {useContext, useEffect} from "react";
import RootContext from "../context/root-context";
import {getAllStatuses} from "../../services/summary-service";
import LoadingView from "../global/LoadingView";
import Home from "../pages/home";


const ChartLoader = () => {


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
export default ChartLoader