import React ,{Component,PropTypes} from 'react';


export const connect=(mapStateToProps , mapDispatchToProps)=>(WrappedComponent)=>{
	class Connect extends Component {
		static contextTypes={
			store : PropTypes.object
		}
		constructor(props){
			super(props);
			this.state = {
				allProps:{}
			}
		}
		componentWillMount(){
			const {store} = this.context;
			this._updateProps();
			store.subscribe(()=>this._updateProps());
		}
		_updateProps(){
			const {store} = this.context;
			let stateProps = mapStateToProps?mapStateToProps(store.getState(),this.props):{};
			let dispatchProps = mapDispatchToProps?mapDispatchToProps(store.dispatch,this.props):{};
			this.setState({allProps:{
				...stateProps,
				...dispatchProps,
				...this.props
			}})
		}
		render(){

			return(
				<WrappedComponent {...this.state.allProps}/>
			)
		}
	}
	return Connect;
};

export class Provider extends Component {
  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.any
  }

  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext () {
    return {
      store: this.props.store
    }
  }

  render () {
    return (
      <div>{this.props.children}</div>
    )
  }
}








