import React, {useContext} from "react";
import RootContext from "../context/root-context";
import LoadingView from "../global/LoadingView";
import {HomeNavBar} from "../nav/nav-bars";
import Footer from "../global/footer";


const ChartPage = props => {

    const state = useContext(RootContext)

    return(
        <div className={"pageContainer chartPage"}>
            <LoadingView isLoading={state.isLoading} message={"Loading..."}/>
            <div>
                <HomeNavBar />
            </div>
            <div id="main">
                <div className={"scrollPage"}>
                    <section>
                        <div className={"page homePage"}>
                            {state.msg && (<h1>{state.msg.msg}</h1>)}
                        </div>

                    </section>
                </div>

            </div>
            <div>
                <Footer />
            </div>
        </div>
    )

}