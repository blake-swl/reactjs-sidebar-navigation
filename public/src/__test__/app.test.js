import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';


describe('<App />', () => {
   it('renders without crashing', () => {
      shallow(<App />);
    }, console.log(<App />, 'test'));

   //  it('renders child component when passed in', () => {
   //     const wrapper = shallow((
   //     <App>
   //       <div className="unique"/>
   //     </App>
   //     ))
   //    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
   //  })
});

