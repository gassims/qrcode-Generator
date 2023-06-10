import React, { Component } from 'react';
import QRImage from './QRImage';
import downloadPlaceholder from './DownloadPlaceholder'
import './QRCodeGenerator.css';
import logo from './logo.svg'



class QRCodeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '',
                        newValue:'',
                      download: 1};
  }
//Handle State
  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = () => {
    this.setState({newValue: this.state.inputValue})
  };

  handleDownloads = () => {
    this.setState({download: this.state.download + 1});
    const number = this.state.download;
    const node = document.querySelector('.placeholder');
    downloadPlaceholder({node,number});

  }

  render() {
    const {inputValue, newValue} = this.state;
    return (
      <section className='section'>
        <div className="placeholder">
        <QRImage className="qrimage" value={newValue}/>
        <img id="logo" src={logo}/>
        </div>
        <br/>
        <div className='info'>
        <input
        id="qrcodeinput"
        name="qrcodeinput"
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleDownloads} type="download">Download</button>
        <button onClick={this.handleSubmit} type="submit">Submit</button>
        </div>
      </section>
    );
  }
}

export default QRCodeGenerator;
