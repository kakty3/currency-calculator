import React, { Component } from 'react';
import {filterFloat} from './utils.js';
import './App.css';

class CurrencyInput extends Component {
  handleChange = (e) => {
    this.props.onChange(e);
  }

  render() {
    const inputStyle = {
      outline: this.props.invalid ? '2px solid #FF5733' : null
    }
    
    return (
      <fieldset>
        <legend>{this.props.name}</legend>
        <input style={inputStyle} value={this.props.value} onChange={this.handleChange}/>     
      </fieldset>
    );
  }
}

class CurrencyCalculator extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      value: 50,
      validity: {
        dollar: true,
        euro: true,
      }
    }
  }

  onDollarChange = (e) => {
    const value = e.target.value;
    let isValid = true;
    
    if (value.length !== 0) {
      if (Number.isNaN(filterFloat(value))) {
        isValid = false;
      }
    }
    console.log(value);

    this.setState({
      value: value,
      validity: {
        ...this.state.validity,
        dollar: isValid
      }
    });
  }

  render() {
    const dollarValue = this.state.value;
    const euroValue = this.state.value;
    return (
      <div>
        <CurrencyInput name='dollar' onChange={this.onDollarChange}
                       value={dollarValue} invalid={!this.state.validity.dollar} />
        <CurrencyInput name='euro' onChange={this.onDollarChange}/>        
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <CurrencyCalculator value='50'/>
    );
  }
}

export default App;
