import React ,{Component , PropTypes}from 'react';
import ReactDOM from 'react-dom';
import Header from './containers/Header';
import Content from './containers/Content';
import { Provider } from 'react-redux'; //Provider相当于一个最顶层的组件 接收store 把store置于最顶层；
import './index.css';


function createStore(reducer){
	let state = null;
	const listeners = [];
	const subscribe = (listener)=>listeners.push(listener);
	const getState = ()=>state;
	const dispatch =(action)=>{
		state = reducer(state,action);
		listeners.forEach((item)=>item());
	}
	dispatch({});
	return{getState , dispatch , subscribe}
}
const themeReducer = (state,action)=>{
	if(!state){
		return{
			themeColor:'red'
		}
	}
	switch(action.type){
		case'CHANGE_COLOR':
			return{
				...state,
				themeColor:action.color
			}
			default:
				return state;
	}
}


const store = createStore(themeReducer);


class Index extends Component{
	render(){
		return(
			<div>
				<Header/>
				<Content/>
			</div>
		)
	}
}
ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
)


















