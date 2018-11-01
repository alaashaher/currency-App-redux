import React, { Component } from 'react';
import axios from "axios";
import './CurrencyContiener.css'

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
              this.setState({currencies:(currency)});
          })
          .catch(err => {
              console.log("Opps", err.message);
          });
  }
      render() {
          return (
              <div className="Converter">
                  <div className="Form">
                      <input
                          name="amount"
                          type="text"
                          value={this.state.amount}
                          onChange={event =>
                              this.setState({ amount: event.target.value })
                          }
                      />
                      <select
                          name="from"
                          onChange={(event) => this.selectHandler(event)}
                          value={this.state.fromCurrency}>

                          {this.state.currencies.map(cur => (
                              <option key={Object.keys(cur)[0]}>{Object.keys(cur)[0]}</option>
                            ))}
                      </select>

                      <select
                          name="to"
                          onChange={(event) => this.selectHandler(event)}
                          value={this.state.toCurrency}>

                          {this.state.currencies.map(cur => (
                            <option key={Object.keys(cur)[0]}>{Object.keys(cur)[0]}</option>
                          ))}
                      </select>
                      <button onClick={this.convertHandler}>Convert</button>
                  </div>
                  {this.state.result &&
                      <h3>{this.state.result}</h3>
                  }
              </div>
          );
      }
}

export default CurrencyContiener;
