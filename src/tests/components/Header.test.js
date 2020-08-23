import {shallow} from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import toJSON from 'enzyme-to-json'
import React from 'react'
import Header from '../../components/Header'

test('should render Header correctly',()=>{
    const wrapper=shallow(<Header/>)
    expect(toJSON(wrapper)).toMatchSnapshot()

    /* const renderer=new ReactShallowRenderer();
    renderer.render(<Header/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot() */

})

//Snapshot allow us to track changes to the data over time