import * as actions from '../actions/actionsType';

const intialState={
  result: null,
  fromCurrency: "USD",
  toCurrency: "GBP",
  amount: 1,
  currencies: [],
};

export default (state=intialState,action)=>{
  switch (action.type) {
    case actions.SELECT_TO_CURRENY:
      return {...state,toCurrency:action.payload.toCurrency}
      break;
    case actions.SELECT_FROM_CURRENY:
      return {...state,fromCurrency:action.payload.fromCurrency}
      break;
    case actions.CHANGE_AMOUNT:
      return {...state,amount:action.payload.amount}
      break;
    case actions.SET_CURRENCIES:
      return {...state,currencies:action.payload.currencies}
      break;
    case actions.SET_RESULT:
      return {...state,result:action.payload.result}
      break;
    default:
      return state;
  }
}
