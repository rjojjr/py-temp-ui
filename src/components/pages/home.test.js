import "@testing-library/jest-dom/extend-expect";
import React from "react";

import {sensors} from "../../constants";
import * as axiosService from "../../services/axios-service";
import App from "../../App";

import {render, fireEvent} from '@testing-library/react'

describe('home', () => {

    describe('render', () => {

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

        it('properly', async () => {

            const mock = jest.spyOn(axiosService, "getSummary");
            mock.mockResolvedValue(success);

            const {container, findByText} = render(
                <App/>
            );

            expect(container.querySelector("div.loader")).toBeInTheDocument();

            const label = await findByText("Py Temp");
            expect(container.querySelector("div#homeNav")).toBeInTheDocument();
            expect(container.querySelector("div.homePage")).toBeInTheDocument();
            expect(container.querySelector("footer")).toBeInTheDocument();
            expect(container.querySelector("table")).toBeInTheDocument();
            expect(container.querySelector("button")).toBeInTheDocument();
        });

        it('re-render when pressing refresh button', async () => {

            const mock = jest.spyOn(axiosService, "getSummary");
            mock.mockResolvedValue(success);

            const {container, findByText} = render(
                <App/>
            );

            expect(container.querySelector("div.loader")).toBeInTheDocument();

            const label = await findByText("Py Temp");

            const button = container.querySelector("button");

            fireEvent.click(button)

            expect(container.querySelector("div.loader")).toBeInTheDocument();
            await findByText("Py Temp");
            expect(container.querySelector("div#homeNav")).toBeInTheDocument();
            expect(container.querySelector("div.homePage")).toBeInTheDocument();
            expect(container.querySelector("footer")).toBeInTheDocument();
            expect(container.querySelector("table")).toBeInTheDocument();
            expect(container.querySelector("button")).toBeInTheDocument();
        });

    })

})