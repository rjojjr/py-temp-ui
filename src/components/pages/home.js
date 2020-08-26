import React, {useContext} from "react";
import {HomeNavBar} from "../nav/nav-bars";
import Footer from "../global/footer";
import RootContext from "../context/root-context";
import StatusCard from "../status/status";
import LoadingView from "../global/LoadingView";

const Home = props => {

    const state = useContext(RootContext)

    return(
        <div className={"pageContainer homePage"}>
            <LoadingView isLoading={state.isLoading} message={"Loading..."}/>
            <div>
               <HomeNavBar />
            </div>
            <div id="main">
                <div className={"scrollPage"}>
                    <section>
                        <div className={"page homePage"}>
                            {state.msg && (<h1>{state.msg.msg}</h1>)}
                            {state.statuses && state.statuses.map((status, key) => {
                                return <StatusCard status={status}/>
                            })}
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
export default Home;