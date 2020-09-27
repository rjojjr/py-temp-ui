import React, {useContext, useEffect} from "react";
import RootContext from "../context/root-context";
import LoadingView from "../global/LoadingView";
import Home from "../pages/home";
import {getChart} from "../../services/chart-service";


const ChartLoader = () => {


    const state = useContext(RootContext)

    const today = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();

        return yyyy + '-' + mm + '-' + dd;
    }

    useEffect( () => {
        getChart( state.handleMsgChange,  state.handleChartChange, 'temp', today(), today());
    }, [getChart]);



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