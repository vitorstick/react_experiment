import React from 'react';
import {shallow} from 'enzyme';
import Schedules from './Schedules';
import {unmountComponentAtNode} from 'react-dom';

describe('<Schedules />', () => {
    let component;
    let container;

    beforeEach(() => {
        component = shallow(<Schedules />);
    });

    test('Should mount component', () => {
        expect(component.length).toBe(1);
    });
});
