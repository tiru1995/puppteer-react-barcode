import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Barcode from 'react-barcode';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <Barcode value='https://www.google.com/'
displayValue='true'
format= "CODE128"
margin= '30'
width='1'
/>

<br/>
  <Barcode value='https://www.ibaset.com/'
displayValue='false'
format= "CODE128"
margin= '30'
width='2'
/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
