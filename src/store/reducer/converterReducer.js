import {CONVERTER_ACTION,SELECT_CURRENY,AMONT_CURRENY} from '../actions/actionsType';
const intialState={
  result: null,
  fromCurrency: "USD",
  toCurrency: "GBP",
  amount: 1,
  currencies: [],
};

export default (state=intialState,action)=>{
  switch (action) {


    default:
    return state;

  }
}


selectHandler = (event) => {
  if (event.target.name === "from") {
      this.setState({ fromCurrency: event.target.value })
  }
  if (event.target.name === "to") {
      this.setState({ toCurrency: event.target.value })
  }
}

convertHandler = () => {
  if (this.state.fromCurrency !== this.state.toCurrency) {

    let  fromcurrency = this.state.currencies.filter(cur=>Object.keys(cur)[0]===this.state.fromCurrency);

    let valueOfFromCurrency = fromcurrency[0][this.state.fromCurrency];

    let  tocurrency = this.state.currencies.filter(cur=>Object.keys(cur)[0]===this.state.toCurrency);

    let valueOfToCurrency = tocurrency[0][this.state.toCurrency];

    const result = this.state.amount * (valueOfToCurrency/valueOfFromCurrency);
    this.setState({ result: result.toFixed(5) })

  } else {
      this.setState({ result: "You can't convert the same currency!" })
  }
};
