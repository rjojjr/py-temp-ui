import React, {useContext, useState} from "react";
import RootContext from "../context/root-context";
import LoadingView from "../global/LoadingView";
import {HomeNavBar} from "../nav/nav-bars";
import Footer from "../global/footer";
import {today} from "../../services/date-service";
import GenericDatePicker from "../global/GenericDatePicker";
import {fetchChart} from "../../services/chart-service";
import {getAllStatuses} from "../../services/summary-service";
import Button from "react-bootstrap/Button";
import TempChart from "../chart/TempChart";


const ChartPage = props => {

    const state = useContext(RootContext);

    const [startDate, setStartDate] = useState(today());
    const [endDate, setEndDate] = useState(today());

    const handleReload = () => {
        fetchChart('temp', startDate, endDate);
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
                                <>
                                    <GenericDatePicker currentDate={startDate} changeDate={setStartDate}>Start Date</GenericDatePicker>
                                    <GenericDatePicker currentDate={endDate} changeDate={setEndDate}>End Date</GenericDatePicker>
                                    <Button variant={"dark"} type={"button"} onClick={() => handleReload()}>Refresh</Button>
                                    <hr/>
                                    <TempChart data={state.chartIntervals} />
                                </>
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