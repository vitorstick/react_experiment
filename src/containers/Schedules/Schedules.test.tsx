import React, {useState as useStateMock} from 'react';
import fetchMock from 'jest-fetch-mock';
import {shallow} from 'enzyme';
import Schedules from './Schedules';
import {unmountComponentAtNode} from 'react-dom';
import {waitFor, render} from '@testing-library/react';
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

    it('renders loading', () => {
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        const wrapper = shallow(<Schedules />);

        setState();

        expect(setState).toHaveBeenCalledTimes(1);
    });
});
