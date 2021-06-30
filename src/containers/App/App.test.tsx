import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('<App />', () => {
    let component;
    beforeEach(() => {
        component = shallow(<App />);
    });

    test('Should mount component', () => {
        expect(component.length).toBe(1);
    });
});
