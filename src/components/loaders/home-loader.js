import React, {useCallback, useContext, useEffect} from "react";
import LoadingView from "../global/LoadingView";

import Home from "../pages/home";

import RootContext from "../context/root-context";

const HomeLoader = props => {

    const state = useContext(RootContext);

    const { isLoading, msg } = state;

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