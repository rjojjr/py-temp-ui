import * as axiosService from "./axios-service"
import {networkErrorMsg, loadingMsg, doneLoadingMsg, sensors} from "../constants";
import {getStatus, getAllStatuses} from "./summary-service";

describe('summary service', () => {

    describe('getStatus', () => {

        const success = {
            status: 200,
            data: [
                {
                    sensor: "office",
                    lastUpdate: "now",
                    now: [70, 70],
                    day: [70, 70],
                    week: [70, 70]
                }
            ]

        }

        const status = {
            id: "office",
            lastUpdate: "now",
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

            await getStatus(msgHandlerMock, stsHandlerMock);
            expect(statusArray.length).toBe(1);
            expect(statusArray.pop()).toStrictEqual(status)
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

            await getStatus(msgHandlerMock, stsHandlerMock);
            expect(msgArray.length).toBe(1);
            expect(statusArray.length).toBe(0);
            expect(msgArray.pop()).toBe(networkErrorMsg)
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

            await getStatus(msgHandlerMock, stsHandlerMock);
            expect(msgArray.length).toBe(1);
            expect(statusArray.length).toBe(0);
            expect(msgArray.pop()).toBe(networkErrorMsg)
        });


    });

    describe('getAllStatuses', () => {

        const success = {
            status: 200,
            data: [
                {
                    sensor: "office",
                    lastUpdate: "now",
                    now: [70, 70],
                    day: [70, 70],
                    week: [70, 70]
                }
            ]

        }

        const status = {
            id: "office",
            lastUpdate: "now",
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
            expect(msgArray.length).toBe(2);
            expect(statusArray.length).toBe(1);
            expect(msgArray.pop()).toBe(doneLoadingMsg)
            expect(msgArray.pop()).toBe(loadingMsg)
            expect(statusArray.pop()).toStrictEqual(status)
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
            expect(msgArray.length).toBe(3);
            expect(statusArray.length).toBe(0);
            expect(msgArray.pop()).toBe(doneLoadingMsg)
            expect(msgArray.pop()).toBe(networkErrorMsg)
            expect(msgArray.pop()).toBe(loadingMsg)
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
            expect(msgArray.length).toBe(3);
            expect(statusArray.length).toBe(0);
            expect(msgArray.pop()).toBe(doneLoadingMsg)
            expect(msgArray.pop()).toBe(networkErrorMsg)
            expect(msgArray.pop()).toBe(loadingMsg)
        });


    });

});