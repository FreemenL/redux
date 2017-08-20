import React , {Component,PropTypes} from 'react';


export default class Header extends Component{
	static propsTypes={
		themeColor:PropTypes.string
	}
	render(){
		return(
			<div style={{color:this.props.themeColor}}>
				react-redux标题
			</div>
		)
	}
}
