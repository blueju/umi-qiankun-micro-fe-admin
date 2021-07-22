import React from 'react';
import { MicroApp } from 'umi';

class MicroAppLayout extends React.Component {
  constructor(props) {
    super(props);
    this.name = window.location.pathname.slice(1);
  }

  render() {
    return <MicroApp name={this.name} />;
  }
}

export default MicroAppLayout;
