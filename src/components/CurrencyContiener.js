import React, { Component } from 'react';
import axios from "axios";
import './CurrencyContiener.css';
import store from '../store/store.js';
import {Provider,connect} from 'react-redux';

const CurrencyContiener = ({currency,onclick}) => {
          return (
              <div className="Converter">
                  <div className="Form">
                      <input name="amount" type="text" />
                      <select name="from">


                      </select>

                      <select name="to">


                      </select>
                      <button onClick={onclick}>Convert</button>
                  </div>
              </div>
          );
}

const mapStateToProperty=state=>({currency:state.converterReducer});
const mapDispatchToProp=dispatch=>({onclick:()=>dispatch({type:'CONVERTER_ACTION'})});
export default connect(mapStateToProperty,mapDispatchToProp)(CurrencyContiener);
