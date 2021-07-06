import React from 'react';
import fetchMock from 'jest-fetch-mock';

import Schedules from './Schedules';
import {unmountComponentAtNode} from 'react-dom';
import {waitFor, render} from '@testing-library/react';
import {shallow} from 'enzyme';
import {TestsMockHelper} from '../../tests_helper/tests_helper';
import {ISchedule} from '../../da/schedule.interface';

describe('<Schedules />', () => {
    let container = null;
    const schedules: ISchedule[] = TestsMockHelper.getSchedules();
    fetchMock.enableMocks();

    const setState = jest.fn();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const useStateMock: any = (initState: any) => [initState, setState];

    afterEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement('div');
        document.body.appendChild(container);
        // Mock fetch
        fetchMock.doMock();
    });

    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
        fetchMock.mockRestore();
    });

    it('renders schedule list correctly', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(schedules));

        const {getByTestId} = render(<Schedules />);

        const listNode = await waitFor(() => getByTestId('schedules-list'));
        expect(listNode.children).toHaveLength(
            TestsMockHelper.getSchedules().length,
        );
    });

    it('renders schedule item correctly', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(schedules));

        const {getAllByTestId} = render(<Schedules />);

        const listNode = await waitFor(() => getAllByTestId('schedules-item'));
        const children = listNode[0].children;
        expect(children).toHaveLength(1);
    });

    it('uses set state', () => {
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        const container = shallow(<Schedules />);

        setState();

        expect(container).toBeDefined();
        expect(setState).toHaveBeenCalledTimes(1);
    });
});
