import React, { Component } from 'react';
import QRCodeGenerator from './Components/QRCodeGeneratorComponents/QRCodeGenerator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <QRCodeGenerator />
      </>
    );
  }
}

export default App;
