import React , {Component,PropTypes} from 'react';
import {connect} from 'react-redux'; // connect 相当于一个高阶组件和context的结合体 接收mapStateToProps,mapDispatchToProps,和具体的组件为参数；返回加工后的组件
import ThemeSwitch from '../components/ThemeSwitch';

const mapStateToProps = (state)=>{ //从顶层组件获取具体的状态值;
	return{
		themeColor:state.themeColor
	}
} 
const mapDispatchToProps = (dispatch)=>{//给组件添加改变状态的监听函数
	return {
    onSwitchColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', color: color })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ThemeSwitch);//connect的返回值为经过加工后的该组件


