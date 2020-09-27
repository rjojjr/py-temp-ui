import React, {useContext, useState} from "react";
import RootContext from "../context/root-context";
import LoadingView from "../global/LoadingView";
import {HomeNavBar} from "../nav/nav-bars";
import Footer from "../global/footer";
import {parseDate, today} from "../../services/date-service";
import GenericDatePicker from "../global/GenericDatePicker";
import {fetchChart} from "../../services/chart-service";
import Button from "react-bootstrap/Button";
import TempChart from "../chart/TempChart";


const ChartPage = props => {

    const state = useContext(RootContext);

    const [startDate, setStartDate] = useState(new Date(Date.now()));
    const [endDate, setEndDate] = useState(new Date(Date.now()));

    const handleReload = () => {
        fetchChart(state.handleMsgChange, state.handleChartChange, 'temp', parseDate(startDate), parseDate(endDate));
    }

    return(
        <div className={"pageContainer chartPage"}>
            <LoadingView isLoading={state.isLoading} message={"Loading..."}/>
            <div>
                <HomeNavBar />
            </div>
            <div id="main">
                <div className={"scrollPage"}>
                    <section>
                        <div className={"page chartPage"}>
                            {state.msg && (<h1>{state.msg.msg}</h1>)}
                            {
                                <div className={"chartContainer"}>
                                    <GenericDatePicker currentDate={startDate} changeDate={setStartDate}>Start Date</GenericDatePicker>
                                    <GenericDatePicker currentDate={endDate} changeDate={setEndDate}>End Date</GenericDatePicker>
                                    <Button variant={"dark"} type={"button"} onClick={() => handleReload()}>Refresh</Button>
                                    <hr/>
                                    <TempChart data={state.chartIntervals} />
                                </div>
                            }
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

export default ChartPage;