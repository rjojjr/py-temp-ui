import React from "react";
import {
    BrowserRouter, withRouter
} from "react-router-dom";
import {
    Switch,
    Route
} from "react-router-dom";
import {Link} from "react-router-dom";
import {HomeNavBar} from "../nav-bars/nav-bars";
import Footer from "../global/footer";

const MainRouter = () => {
    return (
        <BrowserRouter>
            <div className={"switchContainer"}>

                <Switch>
                    <Route exact path="/">
                        //Render home comp
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

