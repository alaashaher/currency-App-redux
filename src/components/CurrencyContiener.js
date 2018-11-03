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
              // this.setState({currencies:(currency)});
              this.props.setCurrensis(currency);
          })
          .catch(err => {
              console.log("Opps", err.message);
          });
  }

  render(){
          return (

              <div className="Converter">
                  <div className="Form">
                      <input name="amount" type="text" value={this.props.currency} />
                      <select name="from">
                        <option>

                        </option>
                      </select>

                      <select name="to">


                      </select>
                      <button onClick={this.props.onclick}>Convert</button>
                  </div>
              </div>
          )}
}

const mapStateToProperty=state=>{console.log(state);return ({currency:state.converter.amount})};
const mapDispatchToProp=dispatch=>({onclick:()=>dispatch({type:actions.CONVERTER_ACTION})} ,
    {setCurrensis:(currencies)=>dispatch({type:actions.SET_CURRENSIS,payload:{currencies}})});
export default connect(mapStateToProperty,mapDispatchToProp)(CurrencyContiener);
