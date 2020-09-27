import React, {useContext, useEffect} from "react";
import RootContext from "../context/root-context";
import LoadingView from "../global/LoadingView";
import Home from "../pages/home";
import {fetchChart} from "../../services/chart-service";
import {today} from "../../services/date-service";


const ChartLoader = () => {


    const state = useContext(RootContext)

    useEffect( () => {
        fetchChart( state.handleMsgChange,  state.handleChartChange, 'temp', today(), today());
    }, [fetchChart]);



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