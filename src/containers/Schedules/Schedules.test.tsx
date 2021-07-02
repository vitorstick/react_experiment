import React from 'react';
import 'jsdom-global/register';
import fetchMock from 'jest-fetch-mock';
import {mount, ReactWrapper, shallow} from 'enzyme';
import Schedules from './Schedules';
import ScheduleItem from '../ScheduleItem/ScheduleItem';
import fetch from 'node-fetch';
import {CONFIG} from '../../config/config';
import {act} from 'react-dom/test-utils';
import {render, unmountComponentAtNode} from 'react-dom';
import {TestsMockHelper} from '../../tests_helper/tests_helper';
import {ISchedule} from '../../da/schedule.interface';

describe('<Schedules />', () => {
    let component;
    const schedules: ISchedule[] = TestsMockHelper.getSchedules();

    beforeEach(() => {
        component = shallow(<Schedules />);
        fetchMock.doMock();
    });

    test('Should mount component', () => {
        expect(component).toMatchSnapshot();
        expect(component.length).toBe(1);
    });

    test('should call API and returns data to me', async () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        const testData = schedules;
        const response = new Response();
        jest.spyOn(global, 'fetch').mockImplementation(() =>
            Promise.resolve(response),
        );

        await act(async () => {
            render(<Schedules />, container);
        });

        expect(container).toBeDefined();

        global.fetch.mockRestore();
    });
});
