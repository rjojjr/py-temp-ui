import React, {useContext} from "react";
import {
    BrowserRouter, withRouter
} from "react-router-dom";
import {
    Switch,
    Route
} from "react-router-dom";
import {Link} from "react-router-dom"
import Footer from "../global/footer";
import HomeLoader from "../loaders/home-loader";
import {HomeNavBar} from "../nav/nav-bars";
import RootContext from "../context/root-context";
import ChartLoader from "../loaders/chart-loader";

const MainRouter = () => {
    const context = useContext(RootContext)
    return (
        <BrowserRouter>
            <div className={"switchContainer"}>

                <Switch>
                    <Route exact path="/">
                        <HomeLoader />
                    </Route>
                    <Route exact path="/charts">
                        <ChartLoader />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

const ErrorPage = ({}) => {
    return (
        <div className={"pageContainer errorPage"}>
            <div>
                <HomeNavBar />
            </div>
            <div id="main">
                <div className={"scrollPage"}>
                    <section>
                        <div className={"page errorPage"}>
                            <h1>"404 Not Found?"</h1>
                            <h2>Did you get lost?</h2>
                            <h3>Let me take you <Link to={"/"}>home</Link></h3>
                        </div>

                    </section>
                </div>

            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default MainRouter

