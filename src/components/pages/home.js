import React, {useContext} from "react";
import {HomeNavBar} from "../nav/nav-bars";
import Footer from "../global/footer";
import RootContext from "../context/root-context";
import StatusCard from "../status/status";

const Home = props => {

    const state = useContext(RootContext)

    const { statuses, msg } = state;
    console.log("state: ", state)
    console.log("statuses: ", statuses)
    return(
        <div className={"pageContainer homePage"}>
            <div>
               <HomeNavBar />
            </div>
            <div id="main">
                <div className={"scrollPage"}>
                    <section>
                        <div className={"page homePage"}>
                            {statuses && statuses.map((status, key) => {
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