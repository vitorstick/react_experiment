import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';
import ScheduleItem from './ScheduleItem';
import {ISchedule} from '../../da/schedule.interface';
import {TestsMockHelper} from '../../tests_helper/tests_helper';

describe('<ScheduleItem />', () => {
    let container = null;
    const schedule: ISchedule = TestsMockHelper.getSchedule();
    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('renders the element', () => {
        act(() => {
            render(<ScheduleItem schedule={schedule} />, container);
        });
        expect(container).toBeDefined();
    });
});
