import React, { Component } from 'react';



// const NavigationSelector = (props) => (
//   <div>
//     <RenderList />
//   </div>
// );
// export default NavigationSelector;

export default class NavigationSelector extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    console.log(this.props.data)
    return (
      <>
        <div></div>
      </>
    )
  }
};