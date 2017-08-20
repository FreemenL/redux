import React , {Component,PropTypes} from 'react';
import ThemeSwitch from './ThemeSwitch';
import {connect} from 'react-redux'; 

class Content extends Component{
	static propTypes = {
    themeColor: PropTypes.string
  }
	render(){
		return(
			<div>
				<p style={{color:this.props.themeColor}}>react-redux内容</p>
				<ThemeSwitch/>
			</div>
		)
	}
}
const mapStateToProps = (state)=>{ 
	return{
		themeColor:state.themeColor
	}
}
Content = connect(mapStateToProps)(Content);
export default Content;

