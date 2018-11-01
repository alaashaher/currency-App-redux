import {createStore} from 'redux';
import reducer from './reducer/index';


//get data from server and edited the state every data

const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;
