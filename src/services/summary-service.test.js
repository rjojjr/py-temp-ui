import * as axiosService from "./axios-service"
import {networkErrorMsg, loadingMsg, doneLoadingMsg, sensors} from "../constants";
import {getStatus, getAllStatuses} from "./summary-service";

describe('summary service', () => {

    describe('getStatus', () => {

        const success = {
            status: 200,
            data: {
                now: [70, 70],
                day: [70, 70],
                week: [70, 70]
            }
        }

        const status = {
            id: sensors[0].room,
            now: [70, 70],
            day: [70, 70],
            week: [70, 70]
        }

        afterEach(() => {
            jest.clearAllMocks();
        });

        it('should dispatch proper handler calls when 200 response', async () => {
            const mock = jest.spyOn(axiosService, "getSummary");
            mock.mockResolvedValue(success);
            const msgArray = [];
            const statusArray = [];

            const msgHandlerMock = (msg) => {
                msgArray.push(msg);
            }
            const stsHandlerMock = (msg) => {
                statusArray.push(msg);
            }

            await getStatus(sensors[0], msgHandlerMock, stsHandlerMock);
            expect(msgArray.length).toBe(2);
            expect(statusArray.length).toBe(1);
            expect(msgArray.pop().toString()).toBe(loadingMsg.toString())
            expect(msgArray.pop().toString()).toBe(doneLoadingMsg.toString())
            expect(statusArray.pop().toString()).toBe(status.toString())
        });


        it('should dispatch proper handler calls when not 200 response', async () => {
            const mock = jest.spyOn(axiosService, "getSummary");
            mock.mockResolvedValue({...success, status: 400});
            const msgArray = [];
            const statusArray = [];

            const msgHandlerMock = (msg) => {
                msgArray.push(msg);
            }
            const stsHandlerMock = (msg) => {
                statusArray.push(msg);
            }

            await getStatus(sensors[0], msgHandlerMock, stsHandlerMock);
            expect(msgArray.length).toBe(3);
            expect(statusArray.length).toBe(0);
            expect(msgArray.pop().toString()).toBe(networkErrorMsg.toString())
            expect(msgArray.pop().toString()).toBe(loadingMsg.toString())
            expect(msgArray.pop().toString()).toBe(doneLoadingMsg.toString())
        });


        it('should dispatch proper handler calls when error', async () => {
            const mock = jest.spyOn(axiosService, "getSummary");
            mock.mockImplementation(() => {
                throw new Error();
            })
            const msgArray = [];
            const statusArray = [];

            const msgHandlerMock = (msg) => {
                msgArray.push(msg);
            }
            const stsHandlerMock = (msg) => {
                statusArray.push(msg);
            }

            await getStatus(sensors[0], msgHandlerMock, stsHandlerMock);
            expect(msgArray.length).toBe(3);
            expect(statusArray.length).toBe(0);
            expect(msgArray.pop().toString()).toBe(networkErrorMsg.toString())
            expect(msgArray.pop().toString()).toBe(loadingMsg.toString())
            expect(msgArray.pop().toString()).toBe(doneLoadingMsg.toString())
        });


    });

    describe('getAllStatuses', () => {

        const success = {
            status: 200,
            data: {
                now: [70, 70],
                day: [70, 70],
                week: [70, 70]
            }
        }

        const status = {
            id: sensors[0].room,
            now: [70, 70],
            day: [70, 70],
            week: [70, 70]
        }

        const status2 = {
            id: sensors[1].room,
            now: [70, 70],
            day: [70, 70],
            week: [70, 70]
        }

        afterEach(() => {
            jest.clearAllMocks();
        });

        it('should dispatch proper handler calls when 200 response', async () => {
            const mock = jest.spyOn(axiosService, "getSummary");
            mock.mockResolvedValue(success);
            const msgArray = [];
            const statusArray = [];

            const msgHandlerMock = (msg) => {
                msgArray.push(msg);
            }
            const stsHandlerMock = (msg) => {
                statusArray.push(msg);
            }

            await getAllStatuses(msgHandlerMock, stsHandlerMock);
            expect(msgArray.length).toBe(4);
            expect(statusArray.length).toBe(2);
            expect(msgArray.pop().toString()).toBe(doneLoadingMsg.toString())
            expect(msgArray.pop().toString()).toBe(loadingMsg.toString())
            expect(msgArray.pop().toString()).toBe({}.toString())
            expect(msgArray.pop().toString()).toBe(loadingMsg.toString())
            expect(statusArray.pop().toString()).toBe(status2.toString())
            expect(statusArray.pop().toString()).toBe(status.toString())
        });


        it('should dispatch proper handler calls when not 200 response', async () => {
            const mock = jest.spyOn(axiosService, "getSummary");
            mock.mockResolvedValue({...success, status: 400});
            const msgArray = [];
            const statusArray = [];

            const msgHandlerMock = (msg) => {
                msgArray.push(msg);
            }
            const stsHandlerMock = (msg) => {
                statusArray.push(msg);
            }

            await getAllStatuses(msgHandlerMock, stsHandlerMock);
            expect(msgArray.length).toBe(6);
            expect(statusArray.length).toBe(0);
            expect(msgArray.pop().toString()).toBe(networkErrorMsg.toString())
            expect(msgArray.pop().toString()).toBe(loadingMsg.toString())
            expect(msgArray.pop().toString()).toBe(doneLoadingMsg.toString())
            expect(msgArray.pop().toString()).toBe(networkErrorMsg.toString())
            expect(msgArray.pop().toString()).toBe(loadingMsg.toString())
            expect(msgArray.pop().toString()).toBe(doneLoadingMsg.toString())
        });


        it('should dispatch proper handler calls when error', async () => {
            const mock = jest.spyOn(axiosService, "getSummary");
            mock.mockImplementation(() => {
                throw new Error();
            })
            const msgArray = [];
            const statusArray = [];

            const msgHandlerMock = (msg) => {
                msgArray.push(msg);
            }
            const stsHandlerMock = (msg) => {
                statusArray.push(msg);
            }

            await getAllStatuses(msgHandlerMock, stsHandlerMock);
            expect(msgArray.length).toBe(6);
            expect(statusArray.length).toBe(0);
            expect(msgArray.pop().toString()).toBe(networkErrorMsg.toString())
            expect(msgArray.pop().toString()).toBe(loadingMsg.toString())
            expect(msgArray.pop().toString()).toBe(doneLoadingMsg.toString())
            expect(msgArray.pop().toString()).toBe(networkErrorMsg.toString())
            expect(msgArray.pop().toString()).toBe(loadingMsg.toString())
            expect(msgArray.pop().toString()).toBe(doneLoadingMsg.toString())
        });


    });

});