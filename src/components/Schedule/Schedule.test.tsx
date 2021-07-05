import React from 'react';
import {unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';
import Schedule from './Schedule';
import {ISchedule} from '../../da/schedule.interface';
import {TestsMockHelper} from '../../tests_helper/tests_helper';

import {render} from '@testing-library/react';

describe('<Schedule />', () => {
    let container = null;
    const schedule: ISchedule = TestsMockHelper.getSchedule();
    const props = {
        schedule,
        onScheduleRetire: jest.fn(),
        onSelectSchedule: jest.fn(),
        onRemoveSchedule: jest.fn(),
    };

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
            render(<Schedule schedule={schedule} />, container);
        });
        expect(container).toBeDefined();
    });

    it('Emit remove prop', () => {
        const {getByTestId} = render(<Schedule {...props} />);

        const element = getByTestId('schedule-item-remove-item');

        expect(element).toBeDefined();

        element.click();

        expect(props.onRemoveSchedule).toHaveBeenCalled();
    });

    it('Emit retire prop', () => {
        const {getByTestId} = render(<Schedule {...props} />);

        const element = getByTestId('schedule-item-retire-item');

        expect(element).toBeDefined();

        element.click();

        expect(props.onScheduleRetire).toHaveBeenCalled();
    });

    it('Emit select item', () => {
        const {getByTestId} = render(<Schedule {...props} />);

        const element = getByTestId('schedule-item');

        expect(element).toBeDefined();

        element.click();

        expect(props.onSelectSchedule).toHaveBeenCalled();
    });
});
