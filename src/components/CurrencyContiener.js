import React, { Component } from 'react';
import axios from "axios";
import './CurrencyContiener.css';
import store from '../store/store.js';
import {Provider,connect} from 'react-redux';
import * as actions from '../store/actions/actionsType';

class CurrencyContiener extends Component {
  componentDidMount() {
      axios
          .get("http://www.apilayer.net/api/live?access_key=8352f6b41464220b277f44d698ea6a34&format=1")
          .then(response => {
              const currency = [];
              for (const key in response.data.quotes) {
                const newKey = key.replace("USD","")
                currency.push({[newKey]: response.data.quotes[key]})
              }
              this.props.setCurrensis(currency);
          })
          .catch(err => {
              console.log("Opps", err.message);
          });
  }
  onchange (value) {
    if (value.length !== 0) {
      this.props.setAmount(value);
    }
    else {
      this.props.setAmount(" ");
    }
  }
  selectFromCurreny (event)  {
        this.props.setfromCurrency(event.target.value)
  }
  selectToCurreny (event)  {
      this.props.settoCurrency(event.target.value)
    }

  convertCurrency  ()  {
      if (this.props.fromCurrency !== this.props.toCurrency) {
        let  fromcurrency = this.props.currencies.filter(cur=>Object.keys(cur)[0]===this.props.fromCurrency);
        let valueOfFromCurrency = fromcurrency[0][this.props.fromCurrency];

        let  tocurrency = this.props.currencies.filter(cur=>Object.keys(cur)[0]===this.props.toCurrency);
        let valueOfToCurrency = tocurrency[0][this.props.toCurrency];

        const amount = parseInt(this.props.amount);
        const result = amount * (valueOfToCurrency/valueOfFromCurrency);
        console.log(result);
        this.props.setResult(result.toFixed(5));
    } else {
        this.props.setResult("You can't convert the same currency!");
}
}
  render(){
          return (
              <div className="Converter">
                  <div className="Form">
                      <input name="amount"
                             type="text" value={this.props.amount}
                             onChange={event =>this.onchange(event.target.value)}
                      />

                      <select name="from"
                              onChange={(event) => this.selectFromCurreny(event)}
                              value={this.props.fromCurrency}
                      >
                        {this.props.currencies.map(cur => (
                            <option key={Object.keys(cur)[0]}>{Object.keys(cur)[0]}</option>
                          ))}
                      </select>

                      <select name="to"
                              onChange={(event) => this.selectToCurreny(event)}
                              value={this.props.toCurrency}
                      >
                        {this.props.currencies.map(cur => (
                            <option key={Object.keys(cur)[0]}>{Object.keys(cur)[0]}</option>
                          ))}
                      </select>
                      <button onClick={()=> this.convertCurrency()}>Convert</button>

                  </div>

                  <div><h3>{this.props.result}</h3></div>
              </div>
          )}
}

const mapStateToProperty=state=>({
        amount:state.converter.amount,
        currencies:state.converter.currencies ,
        fromCurrency:state.converter.fromCurrency,
        toCurrency:state.converter.toCurrency,
        result:state.converter.result
      });

const mapDispatchToProp=dispatch=>({
    setCurrensis:(currencies)=>dispatch({type:actions.SET_CURRENCIES,payload:{currencies}}) ,
    setAmount:(amount)=>dispatch({type:actions.CHANGE_AMOUNT,payload:{amount}}),
    setfromCurrency:(currencyType)=>dispatch({type:actions.SELECT_FROM_CURRENY,payload:{fromCurrency:currencyType}}),
    settoCurrency:(currencyType)=>dispatch({type:actions.SELECT_TO_CURRENY,payload:{toCurrency:currencyType}}),
    setResult:(result)=>dispatch({type:actions.SET_RESULT,payload:{result}})
  });

export default connect(mapStateToProperty,mapDispatchToProp)(CurrencyContiener);
