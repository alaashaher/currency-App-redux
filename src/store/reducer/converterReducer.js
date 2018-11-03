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
    case actions.CONVERTER_ACTION:
      return state;
      break;
    case actions.SELECT_TO_CURRENY:

      break;
    case actions.SELECT_FROM_CURRENY:

      break;
    case actions.AMOUNT_CURRENY:
      return state;
      break;
    case actions.SET_CURRENSIS:

      return {...state,currencies:action.payload.currencies}
      break;


    default:
      return state;

  }
}

// componentDidMount() {
    // axios
    //     .get("http://www.apilayer.net/api/live?access_key=8352f6b41464220b277f44d698ea6a34&format=1")
    //     .then(response => {
    //         const currency = ["USSA":5,"jj":4];
    //         for (const key in response.data.quotes) {
    //           const newKey = key.replace("USD","")
    //           currency.push({[newKey]: response.data.quotes[key]})
    //         }
    //         this.setState({currencies:(currency)});
    //     })
    //     .catch(err => {
    //         console.log("Opps", err.message);
    //     });
// }

// selectHandler = (event) => {
//   if (event.target.name === "from") {
//       this.setState({ fromCurrency: event.target.value })
//   }
//   if (event.target.name === "to") {
//       this.setState({ toCurrency: event.target.value })
//   }
// }

// convertHandler = () => {
//   if (this.state.fromCurrency !== this.state.toCurrency) {
//
//     let  fromcurrency = this.state.currencies.filter(cur=>Object.keys(cur)[0]===this.state.fromCurrency);
//
//     let valueOfFromCurrency = fromcurrency[0][this.state.fromCurrency];
//
//     let  tocurrency = this.state.currencies.filter(cur=>Object.keys(cur)[0]===this.state.toCurrency);
//
//     let valueOfToCurrency = tocurrency[0][this.state.toCurrency];
//
//     const result = this.state.amount * (valueOfToCurrency/valueOfFromCurrency);
//     this.setState({ result: result.toFixed(5) })
//
//   } else {
//       this.setState({ result: "You can't convert the same currency!" })
//   }
// };
