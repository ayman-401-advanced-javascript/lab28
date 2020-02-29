/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../../component/form/form.js';
import Results from '../../component/results/results.js';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Form />', ()=>{
  it('exists at the start of our application',()=>{
    let app = shallow(<Form />);
    expect(app.find('button').exists()).toBeTruthy();
    expect(app.find('input').exists()).toBeTruthy();
    expect(app.find('form').exists()).toBeTruthy();

  });
  it('GET Method',()=>{
    let app = mount(<Form />);
    let button = app.find('button');
    button.simulate('click');
    expect(app.state('Headers')).toBe(undefined);
    expect(app.state('Response')).toBe(undefined);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});