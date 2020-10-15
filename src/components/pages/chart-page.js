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
import Select from "react-select";
import DiffChart from "../chart/DiffChart";


const ChartPage = props => {

    const CHART_TYPES = [{label: 'Temperature Average', value: 1}, {label: 'Temperature Highs and Lows', value: 2}];

    const initChartType = (type) => {
        if(type === 'temp') {
            return 1;
        }else {
            return 2;
        }
    }

    const state = useContext(RootContext);

    const [startDate, setStartDate] = useState(state.chartStart);
    const [endDate, setEndDate] = useState(state.chartEnd);
    const [chartType, setChartType] = useState(state.chartType);
    const [typeSelected, setTypeSelected] = useState(initChartType(state.chartType));

    const updateStart = (start) => {
        state.changeChart(start, endDate, chartType);
        setStartDate(start);
    }

    const updateEnd = (end) => {
        state.changeChart(startDate, end, chartType);
        setEndDate(end);
    }

    const updateType = (selected) => {
        if (selected.value === 1) {
            state.changeChart(startDate, endDate, 'temp');
            setChartType('temp');
            setTypeSelected(1);
            handleChartTypeChange('temp');
        } else {
            state.changeChart(startDate, endDate, 'diff');
            setChartType('diff');
            setTypeSelected(2);
            handleChartTypeChange('diff');
        }
    }

    const getChartLabel = () => {
        if (state.chartType === "temp"){
            return "Temperature Average"
        } else {
            return "Temperature Highs and Lows"
        }
    }

    const handleReload = () => {
        fetchChart(state.handleMsgChange, state.handleChartChange, chartType, parseDate(startDate), parseDate(endDate));
    }

    const handleChartTypeChange = (type) => {
        fetchChart(state.handleMsgChange, state.handleChartChange, type, parseDate(startDate), parseDate(endDate));
    }

    return (
        <div className={"pageContainer chartPage"}>
            <LoadingView isLoading={state.isLoading} message={"Loading..."}/>
            <div>
                <HomeNavBar/>
            </div>
            <div id="main">
                <div className={"scrollPage"}>
                    <section>
                        <div className={"page chartPage"}>
                            {state.msg && (<h1>{state.msg.msg}</h1>)}
                            {
                                <>
                                    <div>
                                        <h1>{getChartLabel()}</h1>
                                        <Select options={CHART_TYPES} onChange={updateType} value={typeSelected}
                                                 placeholder={'Chart Type'}></Select>
                                        <GenericDatePicker currentDate={startDate} changeDate={updateStart}>Start
                                            Date</GenericDatePicker>
                                        <GenericDatePicker currentDate={endDate} changeDate={updateEnd}>End
                                            Date</GenericDatePicker>
                                        <Button variant={"dark"} type={"button"}
                                                onClick={() => handleReload()}>Refresh</Button>
                                        <hr/>
                                    </div>
                                    <div className={"chartContainer"}>
                                        {chartType === 'temp' && (
                                            <TempChart data={state.chartIntervals}/>
                                        )}
                                        {chartType === 'diff' && (
                                            <DiffChart data={state.chartIntervals}/>
                                        )}
                                    </div>
                                </>
                            }
                        </div>

                    </section>
                </div>

            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )

}

export default ChartPage;