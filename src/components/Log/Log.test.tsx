import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';
import Log from './Log';
import {ILog} from '../../da/logs.interface';
import {TestsMockHelper} from '../../tests_helper/tests_helper';

describe('<Log />', () => {
    let container = null;
    const log: ILog = TestsMockHelper.getLog();
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
            render(<Log log={log} />, container);
        });
        expect(container).toBeDefined();
    });
});
